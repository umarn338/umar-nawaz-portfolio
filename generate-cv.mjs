import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

const outputPaths = [
  'C:\\Users\\hop\\.gemini\\antigravity\\scratch\\umar-nawaz-portfolio\\public\\Umar_Nawaz_CV.pdf',
  'C:\\Users\\hop\\Downloads\\Umar_Nawaz_CV_Updated.pdf',
];

function generateCV(outPath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 28, bottom: 26, left: 36, right: 36 },
      info: {
        Title: 'Umar Nawaz - Curriculum Vitae',
        Author: 'Umar Nawaz',
        Subject: 'Software Engineer CV — Frontend, Mobile (Flutter/React) & DevOps',
      },
    });

    const stream = fs.createWriteStream(outPath);
    doc.pipe(stream);

    const pageWidth = doc.page.width;
    const leftMargin = doc.page.margins.left;
    const rightMargin = doc.page.margins.right;
    const contentWidth = pageWidth - leftMargin - rightMargin;

    // Helper: Section Header (Small-caps / LaTeX Harvard style with bottom rule)
    function drawSectionHeader(title) {
      doc.moveDown(0.38);
      doc
        .font('Times-Bold')
        .fontSize(10.5)
        .fillColor('#0f172a')
        .text(title.toUpperCase(), leftMargin, doc.y, {
          characterSpacing: 0.8,
        });
      const lineY = doc.y + 1.5;
      doc
        .moveTo(leftMargin, lineY)
        .lineTo(pageWidth - rightMargin, lineY)
        .lineWidth(0.9)
        .strokeColor('#0f172a')
        .stroke();
      doc.y = lineY + 4.5;
    }

    // Helper: Experience / Project Entry Header
    function drawEntryHeader(title, subtitle, rightMeta) {
      const startY = doc.y;
      doc
        .font('Times-Bold')
        .fontSize(9.8)
        .fillColor('#0f172a')
        .text(title, leftMargin, startY, { continued: subtitle ? true : false });

      if (subtitle) {
        doc
          .font('Times-Italic')
          .fontSize(9.4)
          .fillColor('#1e293b')
          .text(` — ${subtitle}`, { continued: false });
      }

      const afterLeftY = doc.y;
      if (rightMeta) {
        doc
          .font('Times-Bold')
          .fontSize(9.2)
          .fillColor('#1e293b')
          .text(rightMeta, leftMargin, startY, {
            width: contentWidth,
            align: 'right',
          });
      }
      doc.y = Math.max(afterLeftY, doc.y) + 1;
    }

    // Helper: Bullet Item
    function drawBullet(text) {
      const bulletX = leftMargin + 7;
      const textX = leftMargin + 17;
      const y = doc.y;
      doc
        .font('Times-Roman')
        .fontSize(9.15)
        .fillColor('#111827')
        .text('–', bulletX, y);
      doc
        .font('Times-Roman')
        .fontSize(9.15)
        .fillColor('#111827')
        .text(text, textX, y, {
          width: contentWidth - 17,
          lineGap: 0.7,
        });
      doc.y += 1.2;
    }

    // Helper: Skill Row (Bold category + regular items)
    function drawSkillRow(label, items) {
      doc
        .font('Times-Bold')
        .fontSize(9.2)
        .fillColor('#0f172a')
        .text(`${label}: `, leftMargin, doc.y, {
          continued: true,
          width: contentWidth,
        })
        .font('Times-Roman')
        .fillColor('#111827')
        .text(items, {
          continued: false,
          lineGap: 1,
        });
      doc.y += 1.2;
    }

    // ==================== 1. HEADER ====================
    doc
      .font('Times-Bold')
      .fontSize(21)
      .fillColor('#0f172a')
      .text('UMAR NAWAZ', leftMargin, 26, {
        width: contentWidth,
        align: 'center',
        characterSpacing: 1.4,
      });

    doc
      .font('Times-Bold')
      .fontSize(10.2)
      .fillColor('#1e293b')
      .text(
        'Software Engineer — Frontend, Mobile (React.js / Flutter) & DevOps',
        leftMargin,
        doc.y + 1,
        {
          width: contentWidth,
          align: 'center',
        }
      );

    doc
      .font('Times-Roman')
      .fontSize(9.1)
      .fillColor('#334155')
      .text(
        'Islamabad / Lahore, Pakistan  |  umar.n1061@gmail.com  |  +92 348 6999083',
        leftMargin,
        doc.y + 2,
        {
          width: contentWidth,
          align: 'center',
        }
      );

    doc
      .font('Times-Roman')
      .fontSize(9.0)
      .fillColor('#0f172a')
      .text(
        'github.com/umarn338  |  linkedin.com/in/umar-nawaz-un338  |  umar-nawaz-portfolio-omega.vercel.app',
        leftMargin,
        doc.y + 1.5,
        {
          width: contentWidth,
          align: 'center',
        }
      );

    // ==================== 2. PROFESSIONAL SUMMARY ====================
    drawSectionHeader('Professional Summary');
    doc
      .font('Times-Roman')
      .fontSize(9.25)
      .fillColor('#111827')
      .text(
        'Software Engineering graduate (BSSE, COMSATS University Islamabad) with hands-on industry experience across Enterprise DevOps (Systems Limited, Lahore) and Frontend & Mobile Application Development (DevelopersHub Corporation & Firnas Tech). Proven track record of architecting responsive, user-centric web and mobile applications using React.js, Flutter, Tailwind CSS, Supabase, and Firebase, combined with practical expertise in CI/CD pipelines, Docker containerization, Linux CLI, and automated cloud deployments.',
        leftMargin,
        doc.y,
        {
          width: contentWidth,
          align: 'justify',
          lineGap: 1.1,
        }
      );

    // ==================== 3. PROFESSIONAL EXPERIENCE ====================
    drawSectionHeader('Professional Experience');

    // 1. Systems Limited
    drawEntryHeader(
      'DevOps Engineer Intern',
      'Systems Limited, Lahore, Pakistan',
      'July 2026 – Sept 2026'
    );
    drawBullet(
      'Assisted in configuring, maintaining, and monitoring automated CI/CD pipelines (GitHub Actions / GitLab CI) for build, test, and multi-stage deployment workflows at Pakistan’s premier enterprise IT software house.'
    );
    drawBullet(
      'Worked with containerized application environments using Docker and Linux CLI to standardize development and staging deployments across cross-functional engineering teams.'
    );
    drawBullet(
      'Collaborated on cloud release automation, Git branch protection workflows, and deployment log diagnostics to improve service reliability and reduce manual deployment overhead.'
    );

    doc.y += 3.5;

    // 2. DevelopersHub Corporation
    drawEntryHeader(
      'Frontend Developer Intern (Remote)',
      'DevelopersHub Corporation',
      'May 2026 – June 2026'
    );
    drawBullet(
      'Engineered responsive, modern web interfaces and reusable UI component libraries using React.js, JavaScript (ES6+), and Tailwind CSS within a distributed remote agile engineering team.'
    );
    drawBullet(
      'Integrated dynamic frontend views with RESTful APIs, managed client-side application state, and optimized page rendering performance across desktop, tablet, and mobile viewports.'
    );
    drawBullet(
      'Collaborated asynchronously via Git and GitHub pull requests, peer code reviews, and structured sprint milestones to deliver clean, maintainable production code.'
    );

    doc.y += 3.5;

    // 3. Firnas Tech
    drawEntryHeader(
      'Frontend Developer Intern',
      'Firnas Tech, Abbottabad, Pakistan',
      'March 2025 – Nov 2025'
    );
    drawBullet(
      'Developed responsive frontend interfaces for production web and cross-platform mobile applications using React.js, Flutter, HTML5, CSS3, and Tailwind CSS.'
    );
    drawBullet(
      'Built modular, reusable UI components and collaborated with team members on debugging, state management, feature implementation, and application usability testing.'
    );
    drawBullet(
      'Managed source control, branch workflows, and team collaboration using Git and GitHub.'
    );

    // ==================== 4. TECHNICAL PROJECTS ====================
    drawSectionHeader('Technical Projects');

    // 1. Loom & Label
    drawEntryHeader(
      'Loom & Label — Luxury Fashion & Boutique E-Commerce Platform',
      'React.js, Tailwind CSS, Supabase, Vite',
      'Ongoing (2026)'
    );
    drawBullet(
      'Architected a full-stack luxury e-commerce web application (github.com/umarn338/loom-and-label) featuring a bespoke crystal-glass UI, Dark/Light themes, live search, and 6 curated couture categories.'
    );
    drawBullet(
      'Integrated Supabase (PostgreSQL & Auth) for real-time product inventory synchronization, customer authentication, and a full Store Manager Admin CRUD Dashboard.'
    );
    drawBullet(
      'Engineered live multi-currency conversion (PKR, USD, AED), interactive Cart & Wishlist drawers, Size Guide modal, and direct WhatsApp order checkout integration.'
    );

    doc.y += 3.5;

    // 2. Track Site Pro
    drawEntryHeader(
      'Track Site Pro (Final Year Project)',
      'Flutter, Dart, Firebase Authentication & Cloud Firestore',
      '2025 – 2026'
    );
    drawBullet(
      'Developed a cross-platform construction and project site management mobile application for tracking daily field tasks, worker attendance, and real-time project progress.'
    );
    drawBullet(
      'Integrated Firebase Authentication and real-time cloud database services across dedicated modules for task assignment, attendance logging, and centralized progress reporting.'
    );

    doc.y += 3.5;

    // 3. Smart Healthcare Appointment App
    drawEntryHeader(
      'Smart Healthcare Appointment App',
      'React.js, Tailwind CSS, Firebase Authentication',
      '2025'
    );
    drawBullet(
      'Developed a healthcare appointment management web application with specialist doctor booking, appointment scheduling workflows, Firebase Authentication, and patient record history views.'
    );

    doc.y += 3.5;

    // 4. Student Portal Dashboard
    drawEntryHeader(
      'Student Portal Dashboard',
      'React.js, Tailwind CSS, JavaScript (ES6+)',
      '2025'
    );
    drawBullet(
      'Designed and built a responsive student portal dashboard featuring attendance tracking, GPA display analytics, weekly timetables, notification panels, and Dark/Light theme switching.'
    );

    // ==================== 5. TECHNICAL SKILLS ====================
    drawSectionHeader('Technical Skills');
    drawSkillRow(
      'Frontend & Mobile',
      'React.js, Flutter, Dart, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Responsive UI/UX Design, Vite'
    );
    drawSkillRow(
      'DevOps & Cloud Infrastructure',
      'CI/CD Pipelines, GitHub Actions, Docker, Linux CLI, Vercel, Cloud Deployment & Release Automation'
    );
    drawSkillRow(
      'Backend & Databases',
      'Supabase, Firebase (Authentication, Firestore, Realtime DB), Node.js, Express.js, PostgreSQL, MongoDB, Prisma ORM'
    );
    drawSkillRow(
      'Tools & Core Concepts',
      'Git, GitHub, VS Code, Android Studio, REST API Integration, State Management, Performance Optimization, AI Tools (Claude, ChatGPT)'
    );

    // ==================== 6. EDUCATION & LANGUAGES ====================
    drawSectionHeader('Education & Languages');
    drawEntryHeader(
      'BS Software Engineering',
      'COMSATS University Islamabad, Abbottabad Campus',
      'Graduated: March 2026'
    );
    doc
      .font('Times-Bold')
      .fontSize(9.1)
      .fillColor('#0f172a')
      .text('Languages: ', leftMargin, doc.y + 1, { continued: true })
      .font('Times-Roman')
      .fillColor('#111827')
      .text('Pashto (Fluent)  |  Urdu (Fluent)  |  English (Working Professional)');

    doc.end();
    stream.on('finish', () => resolve(outPath));
    stream.on('error', reject);
  });
}

for (const p of outputPaths) {
  await generateCV(p);
  console.log('Generated:', p, fs.statSync(p).size, 'bytes');
}
