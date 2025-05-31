const websiteData = {
  header: {
    logo: "domain.com",
    navigation: [
      { text: "Iceberg", url: "./" },
      { text: "Snowy News", url: "carrot-news.html" },
      { text: "Frosty Talk", url: "hollow-talk.html" },
      { text: "Penguin Rules", url: "bunny-rules.html" },
      { text: "How to Slide", url: "./#how-to-hop" },
    ],
  },
  footer: {
    links: [
      { text: "Cookies Policy", url: "cookie-policy.html" },
      { text: "Privacy Policy", url: "privacy-policy.html" },
    ],
    contact: {
      address: "367 George Street, Sydney NSW 2000, Australia",
      phone: " +61 2 8083 9400",
      email: "manager@domain.com",
    },
    copyright: `© ${new Date().getFullYear()} Domain.com | All rights reserved.`,
  },
  home: {
    burrowEntrance: {
      title: "Welcome to Winter Penguin's Adventure!",
      subtitle: "The Most Addictive Fish-Collecting Adventure",
      description:
        "Slide into an icy world of endless fun and fish-collecting challenges. Guide your penguin through snowy slopes and discover frozen treasures!",
      features: [
        "Multiple frosty levels",
        "Unique ice boosts",
        "Daily snow challenges",
        "Global iceberg leaderboard",
      ],
      stats: [
        { number: "1M+", label: "Players" },
        { number: "100+", label: "Levels" },
        { number: "4.8", label: "Rating" },
        { number: "50K+", label: "Reviews" },
      ],
      backgroundImage: "images/img-1.png",
      actionButton: {
        text: "Slide Now",
        url: "#burrow-play",
      },
    },
    carrotReview: {
      title: "What Players Say",
      subtitle: "Join Thousands of Happy Penguins",
      description:
        "Our community loves Winter Penguin! Here's what they have to say about their sliding adventures.",
      reviews: [
        {
          text: "The most addictive game I've played this year! Can't stop sliding!",
          author: "FrostyFlipper99",
          rating: 5,
          avatar: "images/img-2.png",
          date: "March 15, 2024",
        },
        {
          text: "Stunning snowy graphics and smooth gameplay. A must-try!",
          author: "SnowSlider23",
          rating: 5,
          avatar: "images/img-3.png",
          date: "March 12, 2024",
        },
        {
          text: "Perfect for quick icy sessions. So much fun!",
          author: "IceKing2024",
          rating: 4,
          avatar: "images/img-4.png",
          date: "March 10, 2024",
        },
      ],
      highlights: [
        { icon: "🏆", text: "Top Rated Game 2024" },
        { icon: "⭐", text: "Editor's Choice" },
        { icon: "🐟", text: "Best Casual Game" },
      ],
    },
    howToHop: {
      title: "How to Play",
      subtitle: "Master the Art of Sliding",
      description:
        "Getting started is easy! Follow these simple steps to become a fish-collecting champion.",
      steps: [
        {
          title: "Start Your Journey",
          description:
            "Click 'Play' to begin your adventure on the icy slopes.",
          icon: "🎮",
          tips: [
            "Create your penguin profile",
            "Choose your starting level",
            "Watch the tutorial",
          ],
        },
        {
          title: "Control Your Penguin",
          description:
            "Use arrow keys or WASD to slide your penguin around obstacles.",
          icon: "⌨️",
          tips: [
            "Press SPACE to leap",
            "Hold SHIFT to speed slide",
            "Double-tap for special slides",
          ],
        },
        {
          title: "Collect Fish",
          description:
            "Gather fish to earn points and unlock special abilities.",
          icon: "🐟",
          tips: [
            "Golden fish are worth more",
            "Chain collections for combos",
            "Look for hidden fish stashes",
          ],
        },
        {
          title: "Avoid Obstacles",
          description:
            "Watch out for tricky ice patches that might slow you down!",
          icon: "⚡",
          tips: [
            "Learn obstacle patterns",
            "Time your leaps carefully",
            "Use ice boosts wisely",
          ],
        },
      ],
      videoTutorial: {
        thumbnail: "images/img-5.png",
        url: "#tutorial-video",
      },
    },
    bunnyGear: {
      title: "Power-Ups & Abilities",
      subtitle: "Enhance Your Sliding Powers",
      description:
        "Discover amazing power-ups and special abilities to boost your gameplay!",
      categories: [
        {
          name: "Movement Boosters",
          icon: "🚀",
          items: [
            {
              name: "Super Slide",
              description: "Slide twice as fast for a limited time",
              duration: "30 seconds",
              cooldown: "60 seconds",
              image: "images/img-6.png",
            },
            {
              name: "Speed Boost",
              description: "Glide faster than ever before",
              duration: "20 seconds",
              cooldown: "45 seconds",
              image: "images/img-7.png",
            },
          ],
        },
        {
          name: "Special Powers",
          icon: "✨",
          items: [
            {
              name: "Fish Magnet",
              description: "Automatically attract nearby fish",
              duration: "15 seconds",
              cooldown: "40 seconds",
              image: "images/img-8.png",
            },
            {
              name: "Ice Shield",
              description: "Temporary invincibility against obstacles",
              duration: "10 seconds",
              cooldown: "50 seconds",
              image: "images/img-1.png",
            },
          ],
        },
      ],
      unlockInfo: {
        title: "How to Unlock",
        methods: [
          "Complete daily snow challenges",
          "Reach level milestones",
          "Find special ice chests",
          "Win community events",
        ],
      },
    },
    bunnyTrails: {
      title: "Tips & Tricks",
      subtitle: "Secret Techniques for Pro Penguins",
      description:
        "Level up your game with these expert strategies and hidden mechanics!",
      categories: [
        {
          title: "Basic Techniques",
          tips: [
            {
              title: "Master the Double Leap",
              description:
                "Time your leaps perfectly to reach higher ice platforms",
              difficulty: "Easy",
              image: "images/img-2.png",
            },
            {
              title: "Combo Moves",
              description: "Chain multiple fish for bonus points",
              difficulty: "Medium",
              image: "images/img-3.png",
            },
            {
              title: "Secret Paths",
              description: "Look for hidden shortcuts in each snowy level",
              difficulty: "Hard",
              image: "images/img-4.png",
            },
          ],
        },
        {
          title: "Advanced Strategies",
          tips: [
            {
              title: "Speed Sliding",
              description: "Optimize your route for fastest completion",
              difficulty: "Expert",
              image: "images/img-5.png",
            },
            {
              title: "Power-Up Combos",
              description: "Combine different power-ups for maximum effect",
              difficulty: "Expert",
              image: "images/img-6.png",
            },
          ],
        },
      ],
      funFacts: [
        {
          title: "Did You Know?",
          facts: [
            "The fastest level completion was 12.3 seconds",
            "Players have collected over 1 billion fish",
            "The longest combo streak is 157 fish",
          ],
        },
      ],
    },
  },
  news: {
    latestUpdates: {
      title: "Latest Game Updates",
      subtitle: "Fresh from the Icy Slopes",
      description:
        "Stay up to date with the newest features and improvements in Winter Penguin!",
      articles: [
        {
          title: "Winter Blizzard Update",
          date: "2024-03-15",
          category: "Update",
          badge: "New",
          image: "images/img-7.png",
          content:
            "Get ready for the biggest update yet! The Winter Blizzard brings new levels, special power-ups, and exclusive arctic-themed costumes.",
          features: [
            "10 new snowy levels",
            "Special ice fish power-up",
            "Winter penguin costumes",
            "Blizzard decorations",
          ],
        },
        {
          title: "Weekly Challenge: Golden Fish Hunt",
          date: "2024-03-10",
          category: "Event",
          badge: "Active",
          image: "images/img-8.png",
          content:
            "Join our special weekly challenge! Find all golden fish to win exclusive rewards and climb the leaderboard.",
          rewards: [
            "Exclusive icy penguin skin",
            "Special badge for profile",
            "2000 bonus fish",
            "Limited edition emotes",
          ],
        },
        {
          title: "Performance Improvements",
          date: "2024-03-05",
          category: "Technical",
          image: "images/img-1.png",
          content:
            "We've made several improvements to make your sliding experience even smoother!",
          improvements: [
            "Faster loading times",
            "Smoother animations",
            "Better mobile performance",
            "Bug fixes",
          ],
        },
      ],
    },
    communitySpotlight: {
      title: "Community Spotlight",
      subtitle: "Celebrating Our Amazing Penguins",
      description:
        "Check out the latest achievements and stories from our wonderful community!",
      highlights: [
        {
          title: "Player of the Month",
          player: "FrostyFlipper99",
          avatar: "images/img-2.png",
          achievement: "First to complete all 100 snowy levels!",
          stats: {
            carrots: "50,000+",
            levels: "100/100",
            badges: "25",
          },
          quote:
            "The key is to never give up and always aim for those golden fish!",
        },
        {
          title: "Community Event Winners",
          type: "Team Challenge",
          image: "images/img-3.png",
          teams: [
            {
              name: "Ice Sliders",
              position: "1st Place",
              score: "125,000 points",
            },
            {
              name: "Frosty Flippers",
              position: "2nd Place",
              score: "120,000 points",
            },
            {
              name: "Snowy Squad",
              position: "3rd Place",
              score: "115,000 points",
            },
          ],
        },
        {
          title: "Creative Corner",
          description: "Check out these amazing fan arts and creations!",
          submissions: [
            {
              artist: "PenguinArtist",
              title: "Winter Penguin's Slide",
              image: "images/img-4.png",
              likes: 1500,
            },
            {
              artist: "SnowySketcher",
              title: "Arctic Adventure",
              image: "images/img-5.png",
              likes: 1200,
            },
          ],
        },
      ],
    },
  },
  contact: {
    title: "Frosty Talk",
    description: "Have questions or feedback? We'd love to hear from you!",
    formFields: [
      { label: "Name", type: "text", required: true },
      { label: "Email", type: "email", required: true },
      { label: "Subject", type: "text", required: true },
      { label: "Message", type: "textarea", required: true },
    ],
  },
  rules: {
    title: "Penguin Rules",
    sections: [
      {
        title: "Game Rules",
        content:
          "Play fair and have fun! Cheating or exploiting bugs is not allowed.",
      },
      {
        title: "Community Guidelines",
        content:
          "Be respectful to other players and maintain a friendly environment.",
      },
      {
        title: "Technical Requirements",
        content:
          "Minimum system requirements and supported browsers information.",
      },
    ],
  },
};
