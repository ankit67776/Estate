'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 * - handleContactSubmission - A function that handles the contact form submission process.
 * - ContactFormInput - The input type for the handleContactSubmission function.
 * - ContactFormOutput - The return type for the handleContactSubmission function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import fs from 'fs/promises'; // Use Node.js file system module
import path from 'path'; // Use Node.js path module

const ContactFormInputSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;


export async function handleContactSubmission(input: ContactFormInput): Promise<ContactFormOutput> {
  return contactFlow(input);
}


const contactFlow = ai.defineFlow(
  {
    name: 'contactFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async (input) => {
    console.log('New contact form submission received:', input);
    
    const csvFilePath = path.join(process.cwd(), 'contact_submissions.csv');
    const csvHeaders = 'name,email,message,submittedAt\n';
    
    // Sanitize message for CSV: escape double quotes by doubling them, and wrap in double quotes
    const sanitizedMessage = `"${input.message.replace(/"/g, '""')}"`;
    const csvRow = `${input.name},${input.email},${sanitizedMessage},${new Date().toISOString()}\n`;

    try {
      // Check if file exists
      try {
        await fs.access(csvFilePath);
      } catch {
        // File doesn't exist, create it with headers
        await fs.writeFile(csvFilePath, csvHeaders, 'utf8');
      }

      // Append new submission
      await fs.appendFile(csvFilePath, csvRow, 'utf8');
      
      console.log('Contact form submission stored in contact_submissions.csv');

      return {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      };

    } catch (error) {
      console.error("Error writing submission to CSV file: ", error);
      return {
        success: false,
        message: 'There was a server error while trying to save your message. Please try again later.',
      };
    }
  }
);