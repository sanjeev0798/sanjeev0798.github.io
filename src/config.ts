export const siteConfig = {
  name: 'Sanjeev Ramachandran',
  title: 'Embedded Software Engineer | C / C++ / Python | IoT & AI | RTOS',
  description: 'Portfolio website of Sanjeev Ramachandran',
  accentColor: '#06b6d4',

  heroBlurb: 'Embedded software + applied AI for sensors and edge devices.',

  social: {
    email: 'sanjeev.ramachandran07@gmail.com',
    linkedin: 'https://linkedin.com/in/sanjeevrmsc',
    github: 'https://github.com/sanjeev0798',
    twitter: '',
  },
  aboutMe:
      'Master’s graduate in Embedded Systems Engineering with 2 years experience in embedded firmware development, RTOS, and AI-based IoT solutions. Skilled in microcontroller programming, sensor data analysis, and test automation. Fluent in English (C1) and German (B2).',
  skills: [
    'C',
    'C++',
    'Python',
    'STM32',
    'MSP430',
    'ESP32',
    'FreeRTOS',
    'Linux (Ubuntu)',
    'MQTT',
    'SPI / I²C / UART',
    'Bluetooth / Zigbee / Wi-Fi',
    'Git',
  ],
  projects: [
    {
      name:
          'Optimizing Predictive Maintenance through automated data selection',
      description:
          'Developed an automated sensor data selection pipeline for black-box predictive maintenance models, improving accuracy and stability across two real-world customer datasets.',
      link: '#',
      skills: ['C++', 'Python', 'STM32'],
      category: 'AI'
    },
    {
      name: 'Escape Room Puzzle IoT System',
      description:
          'Designed and Built an IoT-controlled puzzle game as part of escape room challenge with OTA firmware updates and MQTT communication.',
      link: 'https://github.com/ubilab-ws21/puzzle-1',
      skills: ['C++', 'C', 'ESP32', 'MQTT', 'OTA'],
      category: 'Embedded'
    },
    {
      name: 'Trolbot – RFID-Based Retail Automation',
      description:
          'Designed a retail cart automation prototype with MSP430 & CC3200 microcontrollers, integrating RFID scanning and cloud connectivity.',
      link: '#',
      skills: ['C', 'MSP430', 'CC3200', 'RFID', 'Cloud Integration'],
      category: 'Embedded'
    },
    {
      name: 'Process Data Surveillance using IoT',
      description:
          'Implemented mobile monitoring for industrial sensors using NodeMCU with cloud connectivity.',
      link: 'https://www.ijrte.org/portfolio-item/F2373037619/',
      skills: ['C', 'NodeMCU', 'Cloud Integration'],
      category: 'Embedded'
    },
    {
      name: 'Memory Thing',
      description:
          'Developed a web app to generate personalized 3D-printable memorial object ideas using AI.',
      link: 'https://memorything-object.streamlit.app/',
      skills: ['Python'],
      category: 'Others'
    },
  ],
  experience: [
    {
      company: 'endiio Engineering GmbH, Freiburg, Germany',
      title: 'Embedded Software Engineer',
      dateRange: 'Jun 2022 – Dec 2023',
      bullets: [
        'Implemented AI-based algorithms for sensor data processing in IoT systems.',
        'Automated functional testing of RF sensors, reducing test time and increasing process efficiency by 60%.',
        'Developed embedded firmware in C/C++ for analog signal processing.',
        'Performed hardware debugging and created unit tests for complete coverage.',
      ],
    },
    {
      company: 'halstrup-walcher GmbH, Kirchzarten, Germany',
      title: 'Embedded Software Engineer',
      dateRange: 'Nov 2021 – Jan 2022, Mar – May 2022',
      bullets: [
        'Extended serial interface in C for electric motor drives.',
        'Development of specific test cases to identify 12 parameter threshold violations in electric motors.',
        'Developed automated test scripts in C and Bash for electric motor quality control.',
      ],
    },
    {
      company: 'NTT Data Services, Chennai, India',
      title: 'Services IT Dev. Program Sr. Associate II and Trainee',
      dateRange: 'Aug – Dec 2019',
      bullets: [
        'Supported development of customer-specific business logic in Salesforce applications.',
        'Earned Salesforce Platform Developer I certification.',
      ],
    },
  ],
  education: [
    {
      school: 'Albert-Ludwigs-Universität Freiburg, Freiburg, Germany',
      degree: 'M.Sc. Embedded Systems Engineering Specializing in AI',
      dateRange: 'May 2020 – Nov 2023',
      achievements: []
    },
    {
      school:
          'Dr. Mahalingam College of Engineering and Technology, Pollachi, India',
      degree: 'B.E. Electronics and Instrumentation',
      dateRange: 'Jul 2015 – Apr 2019',
      achievements: []
    },
  ],
};
