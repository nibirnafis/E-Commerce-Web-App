import { PrismaClient } from '../generated/prisma/client'; // Import from your custom output
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const connectionString = process.env.DIRECT_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter, // Pass the adapter here
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;