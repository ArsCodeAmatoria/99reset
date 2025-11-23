// Demo comments data for testing without database

export interface DemoComment {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  replies?: DemoComment[];
}

export const demoComments: Record<string, DemoComment[]> = {
  'coalition-strategy-who-to-align-with': [
    {
      id: '1',
      name: 'Sarah Chen',
      content: 'This framework is exactly what we need. The focus on ownership over identity is brilliant. We\'ve been organizing a worker co-op in Toronto and this articulates what we\'ve been trying to express.',
      createdAt: new Date('2025-11-16T10:30:00Z'),
      replies: [
        {
          id: '2',
          name: 'Marcus Johnson',
          content: 'As a union organizer, this speaks directly to the coalitions we need to build. The interfaith angle is particularly powerful - we\'ve been working with mosque and synagogue communities here in Vancouver.',
          createdAt: new Date('2025-11-16T14:20:00Z'),
        },
        {
          id: '3',
          name: 'Sarah Chen',
          content: 'That\'s amazing! Would love to connect and share notes. We\'re doing similar work with the Catholic Worker movement here.',
          createdAt: new Date('2025-11-16T16:45:00Z'),
        },
      ],
    },
    {
      id: '4',
      name: 'David Kim',
      content: 'Important read. However, I think we need more discussion on how to actually convert small landlords to CLT supporters. Many are struggling themselves and see this as a threat.',
      createdAt: new Date('2025-11-17T09:15:00Z'),
      replies: [
        {
          id: '5',
          name: 'Amira Hassan',
          content: 'Great point. The 110% market value buyout mentioned in the article could be key here. We need to show them it\'s a win-win transition, not expropriation.',
          createdAt: new Date('2025-11-17T11:30:00Z'),
        },
      ],
    },
  ],
  'bank-boycott-cascade-effect': [
    {
      id: '6',
      name: 'Elena Rodriguez',
      content: 'Switched to Vancity last month. The process was surprisingly simple. Everyone reading this should do the same - it takes less than an hour to move your accounts.',
      createdAt: new Date('2025-11-12T13:20:00Z'),
      replies: [
        {
          id: '7',
          name: 'James Cooper',
          content: 'Did the same thing 2 weeks ago! My mortgage was the hardest part but even that was doable. The Big Five banks won\'t miss me individually, but collectively this can work.',
          createdAt: new Date('2025-11-12T15:45:00Z'),
        },
      ],
    },
    {
      id: '8',
      name: 'Fatima Al-Rashid',
      content: 'The historical comparison to the Montgomery Bus Boycott is powerful. Economic pressure without violence - that\'s the path forward. We\'re organizing a bank switch campaign in Calgary.',
      createdAt: new Date('2025-11-13T10:00:00Z'),
    },
  ],
  'reset-not-communism-structural-distinction': [
    {
      id: '9',
      name: 'Thomas Petrov',
      content: 'As someone who grew up in former Soviet Ukraine, thank you for making this distinction clear. State ownership failed because workers had no real control. Co-ops give us actual ownership.',
      createdAt: new Date('2025-11-15T08:30:00Z'),
      replies: [
        {
          id: '10',
          name: 'Mei Lin',
          content: 'This is crucial messaging. My parents fled Maoist China and are initially skeptical of anything "socialist". But when I explain worker co-ops and credit unions, they get it. The distinction matters.',
          createdAt: new Date('2025-11-15T12:10:00Z'),
        },
      ],
    },
    {
      id: '11',
      name: 'Robert Anderson',
      content: 'The Mondragón example is perfect. 80,000 worker-owners, survived Franco, outlasted the USSR. That\'s the proof we need. Democratic ownership works.',
      createdAt: new Date('2025-11-15T14:55:00Z'),
    },
  ],
  'vancouver-organizing-guide-nov-2025': [
    {
      id: '12',
      name: 'Priya Sharma',
      content: 'Living in East Van and this guide is exactly what we need. The SVT expansion is huge - we need to push Eby to go even further. Already switched to Vancity last year.',
      createdAt: new Date('2025-11-13T08:00:00Z'),
    },
    {
      id: '13',
      name: 'Alex Thompson',
      content: 'VDLC member here. We\'re actively organizing Lululemon workers. Wilson\'s anti-union stance makes him a perfect target. Join us!',
      createdAt: new Date('2025-11-13T14:30:00Z'),
    },
  ],
  'bc-politicians-guide-nov-2025': [
    {
      id: '14',
      name: 'Jennifer Wong',
      content: 'Spot on about Eby and Kahlon. They\'re not perfect but they\'re moving in the right direction. We need to hold them accountable while supporting their housing policies.',
      createdAt: new Date('2025-11-10T11:00:00Z'),
    },
  ],
  'canadian-billionaires-strategic-targeting': [
    {
      id: '15',
      name: 'Michael Dubois',
      content: 'Thomson is the perfect first target. The tax haven exposure is damning. We should coordinate a national campaign around this.',
      createdAt: new Date('2025-11-10T09:30:00Z'),
      replies: [
        {
          id: '16',
          name: 'Yuki Tanaka',
          content: 'Agreed. The media monopoly angle is also important - Thomson Reuters shapes the narrative around wealth inequality. Taking him on is both symbolic and strategic.',
          createdAt: new Date('2025-11-10T13:45:00Z'),
        },
      ],
    },
  ],
};

export function getDemoComments(articleSlug: string): DemoComment[] {
  return demoComments[articleSlug] || [];
}

export function getDemoCommentCount(articleSlug: string): number {
  const comments = demoComments[articleSlug] || [];
  let count = comments.length;
  comments.forEach(comment => {
    if (comment.replies) {
      count += comment.replies.length;
    }
  });
  return count;
}

