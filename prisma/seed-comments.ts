import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting to seed demo comments...');

  // Demo comments for Coalition Strategy article
  const comment1 = await prisma.comment.create({
    data: {
      articleSlug: 'coalition-strategy-who-to-align-with',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      content: 'This framework is exactly what we need. The focus on ownership over identity is brilliant. We\'ve been organizing a worker co-op in Toronto and this articulates what we\'ve been trying to express.',
      approved: true,
      createdAt: new Date('2025-11-16T10:30:00Z'),
    },
  });

  await prisma.comment.create({
    data: {
      articleSlug: 'coalition-strategy-who-to-align-with',
      name: 'Marcus Johnson',
      email: 'marcus@example.com',
      content: 'As a union organizer, this speaks directly to the coalitions we need to build. The interfaith angle is particularly powerful - we\'ve been working with mosque and synagogue communities here in Vancouver.',
      approved: true,
      parentId: comment1.id,
      createdAt: new Date('2025-11-16T14:20:00Z'),
    },
  });

  await prisma.comment.create({
    data: {
      articleSlug: 'coalition-strategy-who-to-align-with',
      name: 'Sarah Chen',
      email: 'sarah@example.com',
      content: 'That\'s amazing! Would love to connect and share notes. We\'re doing similar work with the Catholic Worker movement here.',
      approved: true,
      parentId: comment1.id,
      createdAt: new Date('2025-11-16T16:45:00Z'),
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      articleSlug: 'coalition-strategy-who-to-align-with',
      name: 'David Kim',
      email: 'david@example.com',
      content: 'Important read. However, I think we need more discussion on how to actually convert small landlords to CLT supporters. Many are struggling themselves and see this as a threat.',
      approved: true,
      createdAt: new Date('2025-11-17T09:15:00Z'),
    },
  });

  await prisma.comment.create({
    data: {
      articleSlug: 'coalition-strategy-who-to-align-with',
      name: 'Amira Hassan',
      email: 'amira@example.com',
      content: 'Great point. The 110% market value buyout mentioned in the article could be key here. We need to show them it\'s a win-win transition, not expropriation.',
      approved: true,
      parentId: comment2.id,
      createdAt: new Date('2025-11-17T11:30:00Z'),
    },
  });

  // Demo comments for Bank Boycott article
  const comment3 = await prisma.comment.create({
    data: {
      articleSlug: 'bank-boycott-cascade-effect',
      name: 'Elena Rodriguez',
      email: 'elena@example.com',
      content: 'Switched to Vancity last month. The process was surprisingly simple. Everyone reading this should do the same - it takes less than an hour to move your accounts.',
      approved: true,
      createdAt: new Date('2025-11-12T13:20:00Z'),
    },
  });

  await prisma.comment.create({
    data: {
      articleSlug: 'bank-boycott-cascade-effect',
      name: 'James Cooper',
      email: 'james@example.com',
      content: 'Did the same thing 2 weeks ago! My mortgage was the hardest part but even that was doable. The Big Five banks won\'t miss me individually, but collectively this can work.',
      approved: true,
      parentId: comment3.id,
      createdAt: new Date('2025-11-12T15:45:00Z'),
    },
  });

  const comment4 = await prisma.comment.create({
    data: {
      articleSlug: 'bank-boycott-cascade-effect',
      name: 'Fatima Al-Rashid',
      email: 'fatima@example.com',
      content: 'The historical comparison to the Montgomery Bus Boycott is powerful. Economic pressure without violence - that\'s the path forward. We\'re organizing a bank switch campaign in Calgary.',
      approved: true,
      createdAt: new Date('2025-11-13T10:00:00Z'),
    },
  });

  // Demo comments for Reset Not Communism article
  const comment5 = await prisma.comment.create({
    data: {
      articleSlug: 'reset-not-communism-structural-distinction',
      name: 'Thomas Petrov',
      email: 'thomas@example.com',
      content: 'As someone who grew up in former Soviet Ukraine, thank you for making this distinction clear. State ownership failed because workers had no real control. Co-ops give us actual ownership.',
      approved: true,
      createdAt: new Date('2025-11-15T08:30:00Z'),
    },
  });

  await prisma.comment.create({
    data: {
      articleSlug: 'reset-not-communism-structural-distinction',
      name: 'Mei Lin',
      email: 'mei@example.com',
      content: 'This is crucial messaging. My parents fled Maoist China and are initially skeptical of anything "socialist". But when I explain worker co-ops and credit unions, they get it. The distinction matters.',
      approved: true,
      parentId: comment5.id,
      createdAt: new Date('2025-11-15T12:10:00Z'),
    },
  });

  const comment6 = await prisma.comment.create({
    data: {
      articleSlug: 'reset-not-communism-structural-distinction',
      name: 'Robert Anderson',
      email: 'robert@example.com',
      content: 'The Mondragón example is perfect. 80,000 worker-owners, survived Franco, outlasted the USSR. That\'s the proof we need. Democratic ownership works.',
      approved: true,
      createdAt: new Date('2025-11-15T14:55:00Z'),
    },
  });

  console.log('✅ Demo comments seeded successfully!');
  console.log('- Coalition Strategy: 5 comments (3 with replies)');
  console.log('- Bank Boycott: 3 comments (1 with reply)');
  console.log('- Reset Not Communism: 3 comments (1 with reply)');
}

main()
  .catch((e) => {
    console.error('Error seeding comments:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

