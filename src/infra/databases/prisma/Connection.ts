import { PrismaClient } from '@prisma/client'

export class PrismaConnection {
  private static instance: PrismaClient

  static getInstance() {
    if(!this.instance) {
      this.instance = new PrismaClient();
      this.instance.$connect();
    }
    return this.instance;
  }
}
