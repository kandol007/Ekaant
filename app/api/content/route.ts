// src/app/api/content/route.ts

import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

/**
 * API handler to fetch the site's content from a local JSON file.
 * This function handles GET requests to /api/content.
 */
export async function GET() {
  try {
    // Construct the full path to the JSON file.
    // process.cwd() points to the root directory of the Next.js project.
    
    // --- THIS IS THE CORRECTED LINE ---
    // It now correctly points to the 'data' folder at the project root.
    const jsonDirectory = path.join(process.cwd(), 'data');
    
    // Read the content of the file.
    const fileContents = await fs.readFile(path.join(jsonDirectory, 'content.json'), 'utf8');
    
    // Parse the file content as JSON.
    const data = JSON.parse(fileContents);
    
    // Return the parsed data as a JSON response with a 200 OK status.
    return NextResponse.json(data);

  } catch (error) {
    // Log the error to the console for debugging purposes.
    console.error('Failed to read content file:', error);
    
    // If an error occurs (e.g., file not found), return a 500 Internal Server Error response.
    return new NextResponse(
      JSON.stringify({ message: 'Error reading content data.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}