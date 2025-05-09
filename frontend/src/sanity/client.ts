// ./sanity/client.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 't4dfuyul',  
  dataset: 'production',          
  apiVersion: '2023-01-01',      
  useCdn: true,
});

export default client;

