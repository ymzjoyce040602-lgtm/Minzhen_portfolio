import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  Sparkles,
  FileText,
  Image,
  Video,
  ExternalLink,
} from "lucide-react";
type Lang = "en" | "zh";
type Skill = {
  no: string;
  title: string;
  subtitle: string;
  proof: string[];
  projects: string;
};

type Project = {
  type: string;
  title: string;
  subtitle: string;
  role: string;
  time: string;
  summary: string;
  impact: string[];
  media: string[];
};

type VideoItem = {
  title: string;
  type: string;
  file: string;
  description: string;
  details: string[];
  tags: string[];
};

const profile = {
  name: "Minzhen Yu",
  chineseName: "余旻蓁",
  email: "minzhen_yu@163.com",
  phone: "18923402038",
};

const profileImageSrc = "/images/coverpage.jpg";

const data: Record<Lang, any> = {
  en: {
    nav: {
      brand: "Portfolio / 2026",
      skills: "Skills",
      video: "Video",
      projects: "Copy & Events",
      contact: "Contact",
    },
    hero: {
      tags: ["Marketing", "Product Planning", "E-commerce Operation"],
      note: "Hi. Since you’re here, let me be your guide.",
      title: "Portfolio",
      subtitle:
        "Turning user insights into marketable products, engaging content, and practical operation plans.",
      primary: "View projects",
      secondary: "Contact me",
      sticker: "not just a resume",
      photoTop: "Replace with",
      photoBottom: "your black & white photo",
      bottom: "Marketing / Product / E-commerce",
      by: "by",
    },
    profile: {
      label: "Personal Profile",
      title: "Research-driven, execution-focused.",
      text: "I have practical experience in market research, competitor analysis and project execution. I can quickly understand product selling points, user needs and market communication directions. I have participated in user questionnaire research, competitor pricing and product analysis, marketing content planning and product implementation, and I have basic data organization and analysis skills. I am outgoing and communicative, with experience coordinating with suppliers, student societies, institutions and artists. I can collaborate efficiently in multi-task environments, follow up project progress and solve execution problems in time. I also have strong Chinese and English communication skills and content production abilities, which allow me to support product launches, marketing campaigns and promotional material preparation.",
      educationTitle: "Education",
      education: "BNBU · Culture, Creativity and Management",
      toolsTitle: "Tools",
      tools: "Excel · SPSS · Office · Xiumi · Adobe · Blender · Camtasia",
    },
    fit: {
      label: "Role fit",
      cards: [
        [
          "Marketing Intern",
          "Content planning, social media operation, campaign support and trend-based storytelling.",
        ],
        [
          "Product Intern",
          "User research, product function planning, competitor analysis and prototype iteration.",
        ],
        [
          "E-commerce Operation",
          "Product information organization, supplier communication and launch support.",
        ],
        [
          "Script & Video",
          "Script planning, short-form video editing, visual rhythm and content packaging.",
        ],
      ],
    },
    skillsTitle: "skills & proof",
    skillsNote: "what I can actually do",
    evidenceLabel: "Evidence",
    skills: [
      [
        "01",
        "Market Research & User Insight",
        "市场调研与用户洞察",
        [
          "200+ student and staff surveys for BNBU 20th anniversary cultural products",
          "10+ competitor cultural stores and 40+ product categories analyzed",
          "400+ valid questionnaires for Lumin user needs research",
        ],
        "BNBU Innovation Center · Lumin",
      ],
      [
        "02",
        "Product Planning & E-commerce Support",
        "产品规划与电商运营支持",
        [
          "8 cultural creative products followed from material confirmation to sampling and production",
          "Supplier communication, sample review, material and production process checking",
          "Product function matrix planning: UGC community, photoshoot service, exhibition booking",
        ],
        "BNBU Innovation Center · Shiguang Cultural Creative · Lumin",
      ],
      [
        "03",
        "Content Marketing & Social Media Operation",
        "内容营销与新媒体运营",
        [
          "City Walk article reached 1,700+ views, around 3× the account average",
          "10+ exhibition promotional posts supported a 20% increase in platform views",
          "WeChat community promotion contributed to a 20% increase in new user acquisition",
        ],
        "Bao’an Media Center · Shenzhen Sky Museum · New Oriental",
      ],
      [
        "04",
        "Campaign & Event Execution",
        "营销活动与线下执行",
        [
          "Supported 3 large-scale exhibitions with 2,000+ daily visitors",
          "Event participation increased by 30% with 95% visitor satisfaction",
          "Supported annual professional exhibitions from planning to operation",
        ],
        "Shenzhen Sky Museum · Huijing Creative · Fusion Exhibition",
      ],
      [
        "05",
        "Community & Relationship Management",
        "社群运营与关系维护",
        [
          "Collaborated with 10+ student societies for New Oriental campus promotion",
          "Coordinated with 5 external institutions and artists for exhibition projects",
          "Student association vice president experience in organization and coordination",
        ],
        "New Oriental · Shenzhen Sky Museum · CCM Student Association",
      ],
      [
        "06",
        "Data Tracking & Review",
        "数据整理与效果复盘",
        [
          "Questionnaire collection, feedback analysis, content performance tracking",
          "Excel, SPSS, Microsoft Office, Xiumi, Adobe Illustrator, Blender",
          "Able to translate data signals into product, content and operation improvements",
        ],
        "Innovation Center · Bao’an Media Center · Huijing Creative",
      ],
      [
        "07",
        "Script Planning & Video Editing",
        "脚本策划与视频编辑",
        [
          "Able to plan video structure from hook, storyline, visual rhythm to call-to-action",
          "Experience converting campaign ideas and project outcomes into short-form video content",
          "Can prepare scripts, shot lists, subtitles, cover images and edited video materials",
        ],
        "Signal System · Cross-time Art Storytelling",
      ],
    ],
    luminCase: {
      label: "Lumin Case Study",
      title: "user research-driven product design",
      intro:
        "Lumin is a cultural heritage social platform designed for museum visitors and culture lovers. In this project, I focused on trend judgment, competitor research, data analysis and decision support, translating market insights into product positioning, feature planning and business strategy.",
      cards: [
        {
          no: "01",
          title: "User Research",
          subtitle: "Target users / Needs / Segmentation",
          image: "/images/lumin/user-research.png",
          description:
            "Identified the core needs of culture lovers, museum visitors, social media users and technology-oriented users through market segmentation and target user analysis.",
          points: [
            "Segmented users by geography, demographics, psychology and behavior.",
            "Identified demand for cultural content, social interaction, personalized recommendations and one-stop museum services.",
            "Focused on target markets including the Greater Bay Area, Yangtze River Delta, first-tier cities and emerging lower-tier cities.",
          ],
        },
        {
          no: "02",
          title: "Competitor Analysis",
          subtitle: "Market gap / Positioning / Differentiation",
          image: "/images/lumin/competitor-analysis.png",
          description:
            "Compared existing museum apps, cultural platforms and social products to identify a clear market gap for a vertical cultural heritage social platform.",
          points: [
            "Used a perceptual map to compare competitors by technology level and user participation.",
            "Found key pain points: limited content, weak social functions, low personalization and insufficient use of AI/AR/VR.",
            "Positioned Lumin as a combined solution of museum services, social community, AI recommendation and immersive digital experience.",
          ],
        },
        {
          no: "03",
          title: "Prototype Design",
          subtitle: "Feature planning / User journey / Product logic",
          image: "/images/lumin/prototype-design.png",
          description:
            "Converted user needs into product modules and planned the user journey from information search to cultural experience, social interaction and consumption conversion.",
          points: [
            "Planned museum information search, exhibition recommendation, online ticketing and cultural product shopping.",
            "Designed community functions such as posting, interest circles, likes, comments, friends, private messages and offline activity organization.",
            "Added value-added services including cultural filters, photographer booking, 3D artifact display and AI scene restoration.",
          ],
        },
        {
          no: "04",
          title: "Data Analysis",
          subtitle: "Market evidence / Business model / Decision support",
          image: "/images/lumin/data-analysis.png",
          description:
            "Used market data, user segmentation and business model analysis to support product positioning, feature priority and monetization strategy.",
          points: [
            "Analyzed cultural consumption growth, museum visitor growth and museum-related content sharing trends.",
            "Connected user characteristics with product feature priorities and growth strategy.",
            "Supported revenue planning through ticket commission, cultural product customization, membership subscription and brand collaboration.",
          ],
        },
      ],
    },
    aiAgent: {
      label: "AI Agent Workflow Practice",
      title: "AI agent workflow building",
      projects: [
        {
          no: "01",
          title: "Stardew Valley Gift Guide Agent",
          subtitle: "Game Strategy / Knowledge Workflow",
          description:
            "An AI Agent designed to help Stardew Valley players quickly search villagers’ gift preferences, relationship-building strategies, birthdays, and recommended gift plans. The workflow turns scattered game information into an easy Q&A and recommendation system.",
          workflow: [
            "User input: player enters a villager name, item name, season, or relationship goal.",
            "Information retrieval: the agent searches structured gift preference data and key game rules.",
            "Logic matching: it identifies loved, liked, neutral, disliked, and hated gifts.",
            "Output generation: it provides gift suggestions, birthday reminders, and relationship-building tips.",
          ],
          skills: [
            "user intent classification",
            "knowledge base organization",
            "Q&A workflow design",
            "recommendation logic",
          ],
          screenshots: [
            {
              label: "Workflow Overview",
              src: "/images/workflow_Stardrewvelly.png",
            },
            {
              label: "Test Input",
              src: "/images/input1.png",
            },
            {
              label: "Output Card",
              src: "/images/output1.png",
            },
          ],
        },
        {
          no: "02",
          title: "Annual Exhibition Progress Coordination Agent",
          subtitle: "Project Management / Multi-team Workflow",
          description:
            "An AI Agent designed for annual exhibition preparation. It helps different departments upload progress, summarize completed tasks, align work granularity, and make project status visible to all team members.",
          workflow: [
            "User input: each department uploads progress notes, files, screenshots, or task updates.",
            "Information extraction: the agent identifies completed work, pending tasks, blockers, and responsible teams.",
            "Progress structuring: it converts scattered updates into a unified progress dashboard.",
            "Coordination output: it generates team summaries, reminders, and follow-up suggestions.",
          ],
          skills: [
            "workflow planning",
            "multi-department coordination",
            "file-based summarization",
            "progress tracking",
          ],
          screenshots: [
            {
              label: "Workflow Overview",
              src: "/images/workflow.png",
            },
            {
              label: "Test Input",
              src: "/images/input2.png",
            },
            {
              label: "Output Card",
              src: "/images/output2.png",
            },
          ],
        },
      ],
    },
    video: {
      label: "Video Portfolio",
      title: "script planning & video editing",
      intro:
        "Videos are not embedded on this website. HR can click the buttons to open or download the video files directly.",
      instructionsTitle: "File setup",
      instructions: [
        "Put your files in public/videos/",
        "Use the exact filenames shown below",
        "The buttons will open the files in a new tab and also support direct download",
      ],
      buttons: { open: "Open video", download: "View video" },
      items: [
        {
          title: "Signal System: Light-Language Table Demo",
          type: "UX Product / Prototype Video",
          file: "/videos/lighting.mov",
          description:
            "A product demo video for a campus social-space solution. It shows how a solo diner can use Yellow, Pink or Green to express social boundaries, how the overhead light becomes visible to others, and how the central tablet supports optional icebreaker prompts.",
          details: [
            "Context: semi-closed tables at Debao Canteen were designed for interaction but often created isolation.",
            "Problem: around 70% of observed users were solo students using phones or earphones as privacy signals.",
            "Solution: Yellow means Join & Talk, Pink means Join Quietly, and Green means Do Not Disturb.",
            "Iteration: early icebreaker cards were upgraded into a central multilingual tablet with clearer instructions.",
          ],
          tags: [
            "product demo",
            "user journey",
            "three-color signal",
            "prototype storytelling",
          ],
        },
        {
          title: "Cross-Time Encounter: Manet & Varda",
          type: "Narrative Short Film / Storyboard",
          file: "/videos/MAD.mp4",
          description:
            "A narrative video project built around a cross-time encounter between Manet and Agnès Varda. Through dialogue, visual contrast and the discussion of Olympia, the story explores the male gaze, women’s bodily autonomy, feminist art and artistic freedom across time.",
          details: [
            "Structure: the story moves from a black-and-white silent-film opening to a retro color time-travel encounter.",
            "Conflict: Manet faces criticism of Olympia and meets Varda, who uses a camera to express women’s voices.",
            "Theme: the dialogue discusses women’s clothing, objectification, bodily autonomy and feminist artistic expression.",
            "Ending: Varda encourages Manet to return to his own time, emphasizing that breaking artistic rules can create meaning for future feminist art.",
          ],
          tags: [
            "script planning",
            "storyboard",
            "dialogue design",
            "visual contrast",
          ],
        },
      ],
    },
    projectsTitle: "project gallery",
    roleLabel: "Role",
    addLabel: "Add",
    projects: [
      [
        "Product / E-commerce",
        "Cultural Creative Product Planning & Production",
        "文创产品策划与落地",
        "Product Planner",
        "2024 — Present",
        "Supported cultural creative product development from user preference research, competitor analysis and supplier communication to sample review and production follow-up.",
        [
          "200+ surveys",
          "10+ competitor stores",
          "40+ products analyzed",
          "8 products followed up",
        ],
        [
          "product sample photos",
          "competitor analysis table",
          "supplier communication record",
        ],
      ],
      [
        "Product / Digital Culture",
        "Lumin Cultural Heritage Digital Interaction Platform",
        "Lumin 文化遗产数字互动平台",
        "Product Planning",
        "2025 — Present",
        "Planned product modules and user journeys based on research into young users’ needs for cultural space experience, social interaction and emotional connection.",
        [
          "400+ valid questionnaires",
          "UGC community",
          "exhibition booking",
          "UI flow optimization",
        ],
        ["app prototype", "user journey map", "function matrix"],
      ],
      [
        "Content Marketing",
        "City Walk Content Campaign",
        "宝安融媒体 City Walk 内容营销",
        "New Media Editor",
        "2023",
        "Captured the City Walk trend and completed topic selection, route planning, photography, copywriting, editing, publishing and performance review.",
        [
          "1,700+ views",
          "3× account average",
          "trend-based topic",
          "full content workflow",
        ],
        ["article screenshots", "photography samples", "performance data"],
      ],
      [
        "Exhibition / Marketing",
        "Exhibition Marketing & Visitor Operation",
        "深圳天空美术馆展览运营与传播",
        "Exhibition Planning Assistant",
        "2024",
        "Supported exhibition site operation, visitor guidance, audience feedback collection, promotional content writing and external partner coordination.",
        [
          "3 exhibitions",
          "2,000+ daily visitors",
          "10+ posts",
          "+20% platform views",
          "5 partners",
        ],
        ["exhibition photos", "promotion posts", "visitor flow videos"],
      ],
      [
        "Community Marketing",
        "New Oriental Campus Community Operation",
        "新东方校园社群运营",
        "Campus Ambassador",
        "2024",
        "Planned WeChat community promotion according to course launch schedules, produced promotional materials, reviewed user data and expanded campus partnerships.",
        [
          "+20% new users",
          "10+ societies",
          "WeChat community",
          "offline promotion",
        ],
        ["community operation screenshots", "campaign posters", "review notes"],
      ],
      [
        "Event Operation",
        "Huijing Creative Event Support",
        "汇菁创意活动策划与执行",
        "Event Assistant",
        "2025",
        "Participated in event planning and on-site execution, collected visitor feedback and supported post-event analysis for operation improvement.",
        [
          "+30% participation",
          "95% satisfaction",
          "feedback analysis",
          "on-site execution",
        ],
        ["event photos", "feedback summary", "operation checklist"],
      ],
    ],
    timelineTitle: "work experience",
    copyEvent: {
      label: "Practical Capability",
      title: "copywriting & event planning",
      intro:
        "This section highlights my practical ability in marketing copywriting, content packaging, event planning and on-site execution. These experiences show that I can translate project goals into clear communication materials and executable activity plans.",
      items: [
        {
          no: "01",
          title: "Copywriting & Content Packaging",
          subtitle: "Marketing Copy / Social Media / Promotional Materials",
          description:
            "I have experience in topic selection, copywriting, visual-material preparation and content performance review. I can write clear and engaging copy according to platform tone, audience interest and campaign goals.",
          proof: [
            "Completed topic selection, photography, copywriting and editing for a City Walk feature at Bao’an Media Center, reaching 1,700+ views, around 3× the account average.",
            "Supported 10+ exhibition promotional posts for Shenzhen Sky Museum and helped increase platform views by around 20%.",
            "Prepared WeChat community promotion materials for New Oriental course campaigns and supported a 20% increase in new user acquisition.",
          ],
          materials: [
            "social media copy",
            "campaign captions",
            "poster text",
            "content review notes",
          ],
        },
        {
          no: "02",
          title: "Event Planning & Execution",
          subtitle: "Offline Event / Exhibition Operation / Team Coordination",
          description:
            "I have hands-on experience in supporting event planning, exhibition operation, visitor guidance, feedback collection and partner communication. I can follow up tasks under time pressure and help turn planning ideas into executable workflows.",
          proof: [
            "Supported 3 large-scale exhibitions at Shenzhen Sky Museum with 2,000+ daily visitors.",
            "Participated in Huijing Creative event planning and on-site execution, with event participation increasing by 30% and visitor satisfaction reaching 95%.",
            "Coordinated with student societies, institutions, suppliers and artists to support project implementation and cross-party communication.",
          ],
          materials: [
            "event proposal",
            "execution checklist",
            "visitor feedback",
            "partner communication record",
          ],
        },
      ],
    },
    timelineLabel: "Experience timeline",
    timeline: [
      [
        "2025 — Present",
        "BNBU Innovation Center",
        "Product Planner",
        "Cultural creative products · supplier communication · product follow-up",
      ],
      [
        "2025",
        "Huijing Creative",
        "Event Assistant",
        "Event planning · visitor feedback · on-site execution",
      ],
      [
        "2024",
        "New Oriental",
        "Campus Ambassador",
        "Community operation · campaign promotion · campus partnerships",
      ],
      [
        "2024",
        "Shenzhen Sky Museum",
        "Exhibition Planning Assistant",
        "Exhibition operation · content promotion · partner coordination",
      ],
      [
        "2023",
        "Bao’an Media Center",
        "New Media Editor",
        "Trend-based content planning · copywriting · data tracking",
      ],
    ],
    awardsTitle: "tiny wins",
    awardsLabel: "Awards",
    awards: [
      "E-commerce Innovation, Creativity and Entrepreneurship Challenge — Campus First Prize",
      "CMAU Marketing Planning Competition — Campus Second Prize",
      "Coca-Cola Campus Marketing Competition — Zhuhai Top 15",
      "Leadership Points Silver Award",
      "Professional Scholarship",
    ],
    contact: {
      note: "and that’s a wrap.",
      title: "let’s talk.",
      text: "I am open to internship opportunities in marketing, product operation, e-commerce operation and content operation.",
      download: "Resume download button placeholder",
      location: "Guangdong · Hong Kong · Greater Bay Area",
    },
  },
  zh: {
    nav: {
      brand: "作品集 / 2026",
      skills: "能力",
      video: "视频",
      projects: "文案/活动",
      contact: "联系",
    },
    hero: {
      tags: ["市场营销", "产品策划", "电商运营"],
      note: "你好，欢迎来到我的作品集。",
      title: "Portfolio",
      subtitle: "我擅长将用户洞察转化为产品方案、内容传播与可落地的运营执行。",
      primary: "查看项目",
      secondary: "联系我",
      sticker: "不只是简历",
      photoTop: "替换为",
      photoBottom: "你的黑白个人照片",
      bottom: "市场 / 产品 / 电商",
      by: "作者",
    },
    profile: {
      label: "个人评价",
      title: "能调研、能分析、能执行。",
      text: "本人具备市场调研、竞品分析与项目执行的实践经验，能够快速理解产品卖点、用户需求及市场传播方向。曾参与用户问卷调研、竞品价格与产品分析、营销内容策划及产品落地执行，具备一定的数据整理与分析能力。性格外向，沟通能力强，有多次供应商、社团、机构及艺术家对接经验，能够在多任务环境下高效协作，及时推进项目进度并解决执行问题。同时具备良好的中英文表达能力和内容制作能力，能够支持产品发布、营销活动及宣传物料准备工作。",
      educationTitle: "教育背景",
      education: "北师香港浸会大学 · 文化、创意与管理",
      toolsTitle: "工具能力",
      tools: "Excel · SPSS · Office · 秀米 · Adobe · Blender · 剪映",
    },
    fit: {
      label: "岗位匹配",
      cards: [
        [
          "Marketing Intern",
          "内容策划、新媒体运营、营销活动支持、热点选题与内容传播。",
        ],
        [
          "Product Intern",
          "用户调研、产品功能规划、竞品分析、原型测试与迭代。",
        ],
        [
          "E-commerce Operation",
          "产品信息整理、供应商沟通、商品上新支持、产品页面内容优化。",
        ],
        ["Script & Video", "脚本策划、短视频剪辑、视觉节奏把控和内容包装。"],
      ],
    },
    skillsTitle: "能力与证明",
    skillsNote: "我真正能做什么",
    evidenceLabel: "支撑项目",
    skills: [
      [
        "01",
        "市场调研与用户洞察",
        "Market Research & User Insight",
        [
          "围绕 BNBU 20 周年校庆文创产品，完成 200+ 学生与教师问卷调研",
          "分析 10+ 竞品文创店铺，并对 40+ 产品品类、价格与销量进行对比",
          "为 Lumin 项目收集 400+ 有效问卷，分析目标用户需求",
        ],
        "BNBU 创新中心 · Lumin",
      ],
      [
        "02",
        "产品规划与电商运营支持",
        "Product Planning & E-commerce Support",
        [
          "跟进 8 款文创产品，从材质确认、报价沟通到打样与大货生产",
          "负责供应商沟通、样品审核、材料与生产工艺确认",
          "规划产品功能矩阵，包括 UGC 社区、约拍服务、展览预约等模块",
        ],
        "BNBU 创新中心 · 拾光文创 · Lumin",
      ],
      [
        "03",
        "内容营销与新媒体运营",
        "Content Marketing & Social Media Operation",
        [
          "City Walk 推文获得 1,700+ 阅读，约为账号平均数据的 3 倍",
          "发布 10+ 篇展览宣传内容，推动平台浏览量提升 20%",
          "通过微信社群宣传与课程推广，帮助拉新率提升 20%",
        ],
        "宝安融媒体中心 · 深圳天空美术馆 · 新东方",
      ],
      [
        "04",
        "营销活动与线下执行",
        "Campaign & Event Execution",
        [
          "支持 3 个大型在展展览的现场运营，日均接待 2,000+ 观众",
          "参与活动策划与现场执行，活动参与人数提升 30%，满意度达到 95%",
          "参与专业年度展览，从策划、执行到现场运营提供支持",
        ],
        "深圳天空美术馆 · 汇菁创意 · 聚变年度展览",
      ],
      [
        "05",
        "社群运营与关系维护",
        "Community & Relationship Management",
        [
          "与 10+ 校园社团合作，支持新东方校园推广与用户触达",
          "协调 5 家外部机构与艺术家，推动展览合作项目落地",
          "担任专业学生会副会长，积累组织协调与内部沟通经验",
        ],
        "新东方 · 深圳天空美术馆 · CCM 专业学生会",
      ],
      [
        "06",
        "数据整理与效果复盘",
        "Data Tracking & Review",
        [
          "具备问卷收集、用户反馈分析、内容数据追踪和活动复盘经验",
          "熟悉 Excel、SPSS、Microsoft Office、秀米、Adobe Illustrator、Blender",
          "能够将数据结果转化为产品、内容和运营优化方向",
        ],
        "创新中心 · 宝安融媒体中心 · 汇菁创意",
      ],
      [
        "07",
        "脚本策划与视频编辑",
        "Script Planning & Video Editing",
        [
          "能够从开头钩子、内容结构、画面节奏到行动引导进行视频脚本策划",
          "具备将营销创意、展览现场和项目成果转化为短视频内容的能力",
          "可支持脚本撰写、分镜规划、字幕整理、封面设计和视频剪辑物料准备",
        ],
        "Signal System 灯光信号系统 · 跨时空艺术叙事",
      ],
    ],
    luminCase: {
      label: "Lumin 案例研究",
      title: "用户调研驱动的产品设计",
      intro:
        "Lumin 是一个面向文旅爱好者和博物馆参观者的文化遗产数字互动平台。我在项目中主要负责趋势判断、竞品研究、数据分析与决策支持。这个案例展示了我如何从用户需求和市场机会出发，完成用户调研、竞品分析、原型设计和数据分析，并将洞察转化为产品功能与商业策略。",
      cards: [
        {
          no: "01",
          title: "用户调研",
          subtitle: "目标用户 / 用户需求 / 市场细分",
          image: "/images/lumin/user-research.png",
          description:
            "通过市场细分和目标用户分析，识别文旅爱好者、博物馆参观者、社交媒体活跃用户和科技体验爱好者的核心需求。",
          points: [
            "从地理、人口、心理和行为四个维度进行用户细分。",
            "提炼用户对文化内容、社交互动、个性化推荐和一站式文博服务的需求。",
            "将目标市场聚焦在大湾区、长三角、其他一线城市和二三线城市。",
          ],
        },
        {
          no: "02",
          title: "竞品分析",
          subtitle: "市场空白 / 产品定位 / 差异化",
          image: "/images/lumin/competitor-analysis.png",
          description:
            "通过竞品感知图和市场竞争分析，比较现有文博 APP、文化平台和社交产品，识别垂直文博社交平台的市场机会。",
          points: [
            "使用竞品感知图比较不同产品在技术水平和用户参与度上的位置。",
            "发现现有产品存在内容单一、社交功能弱、个性化不足和 AI/AR/VR 应用不充分等问题。",
            "将 Lumin 定位为文博服务、社交社区、AI 推荐和沉浸式数字体验结合的平台。",
          ],
        },
        {
          no: "03",
          title: "原型设计",
          subtitle: "功能规划 / 用户路径 / 产品逻辑",
          image: "/images/lumin/prototype-design.png",
          description:
            "根据用户需求规划产品功能模块，并围绕“信息获取—文化体验—社交互动—消费转化”的路径设计产品结构。",
          points: [
            "规划博物馆信息查询、展览推荐、线上购票和文创产品购买等文博服务功能。",
            "设计发帖、兴趣圈子、点赞评论、好友私信和线下活动组织等社交功能。",
            "补充文化滤镜、摄影师约拍、3D 文物展示和 AI 场景还原等增值与技术体验功能。",
          ],
        },
        {
          no: "04",
          title: "数据分析",
          subtitle: "市场数据 / 商业模式 / 决策支持",
          image: "/images/lumin/data-analysis.png",
          description:
            "通过市场数据、用户细分结果和商业模式分析，为产品定位、功能优先级和商业化路径提供支撑。",
          points: [
            "分析文化消费增长、博物馆参观人次增长和展览内容传播趋势。",
            "将用户特征转化为目标市场选择、功能优先级和增长策略。",
            "支持票务佣金、文创定制、会员订阅和品牌联名等收入来源设计。",
          ],
        },
      ],
    },
    aiAgent: {
      label: "AI Agent 实操项目",
      title: "AI Agent Workflow 搭建",
      projects: [
        {
          no: "01",
          title: "星露谷物语送礼攻略 Agent",
          subtitle: "游戏攻略 / 知识库工作流",
          description:
            "这是一个面向《星露谷物语》玩家的送礼攻略智能体。它可以帮助玩家快速查询村民喜好、生日、关系提升策略和推荐送礼方案，把分散的游戏攻略信息转化成可直接提问和使用的推荐系统。",
          workflow: [
            "用户输入：玩家输入村民名字、物品名称、季节或关系提升目标。",
            "信息检索：智能体从结构化的送礼喜好数据和游戏规则中查找相关内容。",
            "逻辑匹配：判断礼物属于最爱、喜欢、普通、不喜欢或讨厌类别。",
            "结果输出：生成送礼建议、生日提醒和关系提升攻略。",
          ],
          skills: [
            "用户意图识别",
            "知识库整理",
            "问答流程设计",
            "推荐逻辑搭建",
          ],
          screenshots: [
            {
              label: "Workflow 全貌",
              src: "/images/workflow_Stardrewvelly.png",
            },
            {
              label: "试运行 Input",
              src: "/images/input1.png",
            },
            {
              label: "输出卡片结果",
              src: "/images/output1.png",
            },
          ],
        },
        {
          no: "02",
          title: "年展进度协同智能体",
          subtitle: "项目管理 / 多部门协同工作流",
          description:
            "这是一个用于专业年展筹备的进度协同智能体。它可以接收不同部门上传的进度、文件、截图和任务说明，自动整理完成度、待办事项、阻塞问题和责任部门，帮助团队统一颗粒度并实时对齐项目状态。",
          workflow: [
            "用户输入：各部门上传进度说明、文件、截图或任务更新。",
            "信息提取：智能体识别已完成内容、待完成事项、问题阻塞和负责人。",
            "进度结构化：把分散信息整理成统一的项目进度看板。",
            "协同输出：生成部门总结、提醒事项和后续推进建议。",
          ],
          skills: ["工作流规划", "多部门协同", "文件内容总结", "项目进度追踪"],
          screenshots: [
            {
              label: "Workflow 全貌",
              src: "/images/workflow.png",
            },
            {
              label: "试运行 Input",
              src: "/images/input2.png",
            },
            {
              label: "输出卡片结果",
              src: "/images/output2.png",
            },
          ],
        },
      ],
    },
    video: {
      label: "视频作品页",
      title: "脚本策划与视频编辑",
      intro:
        "视频不用直接在网页上播放。HR 可以点击按钮打开视频文件，或直接下载视频查看。",
      instructionsTitle: "文件放置方式",
      instructions: [
        "把视频文件放进 public/videos/ 文件夹",
        "使用下方写好的文件名",
        "按钮会跳转打开视频，也支持直接下载",
      ],
      buttons: { open: "打开视频", download: "查看视频" },
      items: [
        {
          title: "Signal System 灯光信号系统 Demo",
          type: "UX 产品 / 原型视频",
          file: "/videos/lighting.mov",
          description:
            "这是一个校园社交空间产品 Demo 视频。视频展示独自用餐者如何通过黄、粉、绿三色按钮表达社交边界，顶部灯光如何被路过学生识别，以及中央平板如何提供可选择的破冰话题。",
          details: [
            "场景：德宝餐厅半封闭座位区原本被设计为社交空间，但实际容易造成个体孤立。",
            "问题：观察中约 70% 使用者为独自用餐学生，常用手机或耳机作为请勿打扰的防御信号。",
            "方案：黄色可聊天、粉色可安静共坐、绿色请勿打扰。",
            "迭代：早期纸质破冰卡片被优化为中央多语言平板，并加入更清晰的使用说明。",
          ],
          tags: ["产品演示", "用户路径", "三色信号", "原型叙事"],
        },
        {
          title: "跨时空相遇：Manet 与 Varda",
          type: "叙事短片 / 分镜脚本",
          file: "/videos/MAD.mp4",
          description:
            "这是一个围绕 Manet 与 Agnès Varda 跨时空相遇展开的叙事视频项目。作品通过人物对白、黑白默片与复古彩色影像的对比，以及围绕《奥林匹亚》的讨论，呈现男性凝视、女性身体自主权、女性主义艺术和艺术表达自由等主题。",
          details: [
            "结构：故事从黑白低像素默片开场，转入复古彩色的跨时空相遇。",
            "冲突：Manet 因《奥林匹亚》受到批评，意外遇见用摄影机表达女性声音的 Varda。",
            "主题：对白讨论女性穿着、身体被客体化、身体自主权以及女性主义艺术表达。",
            "结尾：Varda 鼓励 Manet 回到自己的时代继续创作，强调打破陈规对未来女性主义艺术的意义。",
          ],
          tags: ["脚本策划", "分镜设计", "对白设计", "视觉对比"],
        },
      ],
    },
    projectsTitle: "项目作品集",
    roleLabel: "角色",
    addLabel: "添加",
    projects: [
      [
        "产品 / 电商",
        "文创产品策划与落地",
        "Cultural Creative Product Planning & Production",
        "产品策划",
        "2024 — 至今",
        "参与文创产品从用户偏好调研、竞品分析、供应商沟通，到样品审核和生产跟进的完整流程。",
        ["200+ 问卷", "10+ 竞品店", "40+ 产品分析", "8 款产品跟进"],
        ["产品样品照片", "竞品分析表", "供应商沟通记录"],
      ],
      [
        "产品 / 数字文化",
        "Lumin 文化遗产数字互动平台",
        "Lumin Cultural Heritage Digital Interaction Platform",
        "产品策划",
        "2025 — 至今",
        "基于年轻用户对文化空间体验、社交互动和情感连接的需求研究，参与产品模块规划和用户路径设计。",
        ["400+ 有效问卷", "UGC 社区", "展览预约", "UI 流程优化"],
        ["App 原型图", "用户路径图", "功能矩阵"],
      ],
      [
        "内容营销",
        "City Walk 内容营销项目",
        "Bao’an Media Center Content Campaign",
        "新媒体编辑",
        "2023",
        "洞察 City Walk 热点，完成选题、路线规划、拍摄、文案、编辑、发布与数据复盘。",
        ["1,700+ 阅读", "3 倍账号平均", "热点选题", "完整内容流程"],
        ["推文截图", "拍摄样片", "数据截图"],
      ],
      [
        "展览 / 营销",
        "深圳天空美术馆展览运营与传播",
        "Exhibition Marketing & Visitor Operation",
        "展览策划助理",
        "2024",
        "支持展览现场运营、观众导览、反馈收集、宣传内容撰写和外部合作方协调。",
        [
          "3 个展览",
          "日均 2,000+ 观众",
          "10+ 推文",
          "浏览量 +20%",
          "5 家合作方",
        ],
        ["展览现场照片", "宣传推文", "现场视频"],
      ],
      [
        "社群营销",
        "新东方校园社群运营",
        "New Oriental Campus Community Operation",
        "校园宣传大使",
        "2024",
        "根据课程推出节奏制定微信社群传播规划，制作宣传素材，复盘用户数据，并拓展校园合作资源。",
        ["拉新率 +20%", "10+ 社团", "微信社群", "线下推广"],
        ["社群截图", "宣传海报", "复盘记录"],
      ],
      [
        "活动运营",
        "汇菁创意活动策划与执行",
        "Huijing Creative Event Support",
        "活动助理",
        "2025",
        "参与活动策划与现场执行，收集游客反馈，并支持活动后期数据整理和复盘优化。",
        ["参与人数 +30%", "满意度 95%", "反馈分析", "现场执行"],
        ["活动照片", "反馈总结", "执行清单"],
      ],
    ],
    timelineTitle: "实习与实践",
    copyEvent: {
      label: "实践能力",
      title: "文案撰写与活动策划",
      intro:
        "这一部分展示我的营销文案撰写、内容包装、活动策划和现场执行能力。相比单纯展示项目名称，我更希望让 HR 看到我如何把传播目标转化为具体文案、活动流程和可执行的落地方案。",
      items: [
        {
          no: "01",
          title: "文案撰写与内容包装能力",
          subtitle: "营销文案 / 新媒体内容 / 宣传物料",
          description:
            "我具备选题策划、文案撰写、视觉物料准备和内容数据复盘经验，能够根据平台调性、受众兴趣和传播目标，完成清晰、有吸引力且可落地的内容表达。",
          proof: [
            "在宝安融媒体中心参与 City Walk 选题、拍摄、文案和编辑，推文获得 1,700+ 阅读，约为账号平均数据的 3 倍。",
            "在深圳天空美术馆支持 10+ 篇展览宣传内容撰写与发布，推动平台浏览量提升约 20%。",
            "在新东方校园推广中准备微信社群宣传内容和课程推广物料，支持拉新率提升约 20%。",
          ],
          materials: ["新媒体推文", "活动宣传文案", "海报文字", "内容复盘记录"],
        },
        {
          no: "02",
          title: "活动策划与执行能力",
          subtitle: "线下活动 / 展览运营 / 团队协同",
          description:
            "我有活动策划、展览运营、现场执行、观众反馈收集和合作方沟通经验，能够在多任务环境下推进活动流程，并把策划想法落实到具体执行环节。",
          proof: [
            "在深圳天空美术馆支持 3 个大型在展展览的现场运营，日均接待 2,000+ 观众。",
            "在汇菁创意参与活动策划与现场执行，活动参与人数提升 30%，满意度达到 95%。",
            "多次与社团、机构、供应商和艺术家沟通协作，推动项目资料、现场安排和执行进度对齐。",
          ],
          materials: ["活动策划案", "执行清单", "观众反馈", "合作方沟通记录"],
        },
      ],
    },
    timelineLabel: "经历时间线",
    timeline: [
      [
        "2025 — 至今",
        "BNBU 创新中心",
        "产品策划",
        "文创产品 · 供应商沟通 · 产品跟进",
      ],
      ["2025", "汇菁创意", "活动助理", "活动策划 · 游客反馈 · 现场执行"],
      ["2024", "新东方", "校园宣传大使", "社群运营 · 活动推广 · 校园合作"],
      [
        "2024",
        "深圳天空美术馆",
        "展览策划助理",
        "展览运营 · 内容宣传 · 合作协调",
      ],
      [
        "2023",
        "宝安融媒体中心",
        "新媒体编辑",
        "热点内容策划 · 文案编辑 · 数据追踪",
      ],
    ],
    awardsTitle: "小小成果",
    awardsLabel: "奖项",
    awards: [
      "大学生电子商务创新、创意及创业挑战赛 — 校级一等奖",
      "CMAU 市场营销策划比赛 — 校级二等奖",
      "可口可乐校园营销大赛 — 珠海市 15 强",
      "领导力积分银奖",
      "专业奖学金",
    ],
    contact: {
      note: "到这里就结束啦。",
      title: "欢迎联系。",
      text: "我正在寻找市场、产品运营、电商运营和内容运营方向的实习机会。",
      download: "简历下载按钮占位",
      location: "广东 · 香港 · 大湾区",
    },
  },
};

const tests: Array<[string, boolean]> = [
  ["English headline is Portfolio", data.en.hero.title === "Portfolio"],
  ["Chinese headline is Portfolio", data.zh.hero.title === "Portfolio"],
  [
    "Both language versions have seven skill cards",
    data.en.skills.length === 7 && data.zh.skills.length === 7,
  ],
  [
    "Both language versions have two video download cards",
    data.en.video.items.length === 2 && data.zh.video.items.length === 2,
  ],
  [
    "Video cards use file links rather than embedded players",
    data.en.video.items.every((item) => item.file.endsWith(".mp4")) &&
      data.zh.video.items.every((item) => item.file.endsWith(".mp4")),
  ],
  [
    "Both language versions have six project cards",
    data.en.projects.length === 6 && data.zh.projects.length === 6,
  ],
  [
    "Project cards have three media placeholders",
    [...data.en.projects, ...data.zh.projects].every(
      (project) => project[7].length === 3
    ),
  ],
];

tests.forEach(([name, pass]) =>
  console.assert(pass, `Portfolio test failed: ${name}`)
);

function PaperCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-sm border border-stone-300 bg-[#f6f0e6] shadow-[0_18px_40px_rgba(40,35,30,0.16)] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#111_0.55px,transparent_0.55px)] [background-size:8px_8px]" />
      <div className="relative">{children}</div>
    </div>
  );
}

function HandNote({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-['Comic_Sans_MS'] text-[13px] tracking-wide text-stone-800">
      {children}
    </span>
  );
}

function BigTitle({ title }: { title: string }) {
  const map: Record<string, React.ReactNode> = {
    "project gallery": (
      <>
        project
        <br />
        gallery
      </>
    ),
    项目作品集: (
      <>
        项目
        <br />
        作品集
      </>
    ),
    "let’s talk.": (
      <>
        let’s
        <br />
        talk.
      </>
    ),
    "欢迎联系。": (
      <>
        欢迎
        <br />
        联系。
      </>
    ),
    "script planning & video editing": (
      <>
        script planning
        <br />& video editing
      </>
    ),
    脚本策划与视频编辑: (
      <>
        脚本策划
        <br />
        与视频编辑
      </>
    ),
  };
  return <>{map[title] || title}</>;
}

function MediaPlaceholder({
  label,
  icon: Icon,
  addLabel,
}: {
  label: string;
  icon: React.ElementType;
  addLabel: string;
}) {
  return (
    <div className="flex aspect-[3/4] w-full items-center justify-center rounded-sm border border-dashed border-stone-400 bg-[#eee7dd]/80 p-3 text-center transition hover:-translate-y-1 hover:bg-[#f7d6e5]/70">
      <div>
        <Icon className="mx-auto mb-2 h-5 w-5 text-stone-600" />
        <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
          {addLabel} {label}
        </p>
      </div>
    </div>
  );
}

function VideoDownloadCard({
  item,
  index,
  labels,
}: {
  item: VideoItem;
  index: number;
  labels: {
    open: string;
    download: string;
  };
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="grid gap-5 border-t border-stone-300 pt-7 lg:grid-cols-[0.75fr_1.25fr]"
    >
      <div className="relative overflow-hidden rounded-sm bg-stone-900 p-6 text-[#f6f0e6] shadow-[0_18px_32px_rgba(40,35,30,0.24)]">
        <div className="absolute -left-8 -top-7 rotate-[-12deg] font-['Brush_Script_MT'] text-8xl text-[#ef75ad]/70">
          0{index + 1}
        </div>
        <div className="relative z-10 flex min-h-[230px] flex-col justify-between">
          <div>
            <Video className="mb-5 h-12 w-12 text-[#ef75ad]" />
            <p className="text-xs uppercase tracking-[0.22em] text-[#f6f0e6]/60">
              {item.type}
            </p>
            <h3 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
              {item.title}
            </h3>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={item.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f6f0e6] px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-[#f7d6e5]"
            >
              <ExternalLink className="h-4 w-4" /> {labels.download}
            </a>
          </div>
        </div>
      </div>
      <div className="self-center">
        <p className="leading-7 text-stone-700">{item.description}</p>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-stone-700">
          {item.details.map((detail) => (
            <li key={detail} className="border-l border-stone-400 pl-3">
              {detail}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-400 bg-white/40 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function PortfolioWebsite() {
  const [lang, setLang] = useState<Lang>("en");
  const t = data[lang];
  const isZh = lang === "zh";

  return (
    <main
      className={`min-h-screen bg-[#b7afa3] px-4 py-8 text-stone-900 md:px-8 lg:px-12 ${
        isZh ? "font-sans" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-stone-700"
        >
          <span>{t.nav.brand}</span>
          <div className="flex items-center gap-4">
            <div className="hidden gap-6 md:flex">
              <a href="#skills" className="hover:text-[#e46aa3]">
                {t.nav.skills}
              </a>

              <a href="#ai-agent" className="hover:text-[#e46aa3]">
                AI Agent
              </a>

              <a href="#video" className="hover:text-[#e46aa3]">
                {t.nav.video}
              </a>

              <a href="#copywriting" className="hover:text-[#e46aa3]">
                {isZh ? "文案撰写" : "Copywriting"}
              </a>

              <a href="#event-planning" className="hover:text-[#e46aa3]">
                {isZh ? "活动策划" : "Events"}
              </a>

              <a href="#contact" className="hover:text-[#e46aa3]">
                {t.nav.contact}
              </a>
            </div>
            <div className="flex rounded-full border border-stone-500 bg-[#f6f0e6]/80 p-1 tracking-normal">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  lang === "en"
                    ? "bg-stone-900 text-[#f6f0e6]"
                    : "text-stone-700 hover:bg-[#f7d6e5]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  lang === "zh"
                    ? "bg-stone-900 text-[#f6f0e6]"
                    : "text-stone-700 hover:bg-[#f7d6e5]"
                }`}
              >
                中文
              </button>
            </div>
          </div>
        </motion.nav>

        <PaperCard className="overflow-hidden p-6 md:p-10 lg:p-14">
          <section className="relative min-h-[520px]">
            <div className="absolute left-0 top-4 z-0 select-none font-['Brush_Script_MT'] text-[92px] leading-[0.78] text-[#ef75ad] opacity-90 md:text-[150px] lg:text-[190px]">
              minzhen
              <br />
              yu
            </div>
            <div className="absolute right-[430px] top-6 hidden max-w-[240px] -rotate-3 md:block">
              <HandNote>{t.hero.note}</HandNote>
            </div>
            <div className="relative z-10 grid min-h-[500px] items-end gap-8 md:grid-cols-[0.85fr_1.15fr]">
              <div className="order-2 md:order-1">
                <div className="mb-6 flex flex-wrap gap-2">
                  {t.hero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stone-500/50 bg-[#f6f0e6]/80 px-3 py-1 text-xs uppercase tracking-[0.15em] text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="mb-3 max-w-2xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-stone-900 md:text-7xl lg:text-8xl">
                  {t.hero.title}
                </h1>
                <p className="max-w-xl text-base leading-7 text-stone-700 md:text-lg">
                  {t.hero.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#copywriting"
                    className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-[#f6f0e6] transition hover:-translate-y-1 hover:bg-[#e46aa3]"
                  >
                    {t.hero.primary} <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-[#f7d6e5]"
                  >
                    {t.hero.secondary} <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="order-1 flex justify-center md:order-2 md:justify-end">
                <div className="relative h-[420px] w-[290px] md:h-[500px] md:w-[350px]">
                  <div className="absolute left-8 top-8 h-[360px] w-[250px] -rotate-2 overflow-hidden bg-stone-900 md:h-[430px] md:w-[300px]">
                    <img
                      src={profileImageSrc}
                      alt="Minzhen Yu portrait"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-7 left-2 rotate-[-8deg] bg-[#f7d6e5] px-4 py-2 font-['Comic_Sans_MS'] text-sm shadow-md">
                    {t.hero.sticker}
                  </div>
                  <div className="absolute right-1 top-2 rotate-[7deg] bg-[#f6f0e6] px-4 py-2 text-xs uppercase tracking-[0.16em] shadow-md">
                    {t.hero.by} {isZh ? profile.chineseName : profile.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 text-right text-xs uppercase tracking-[0.18em] text-stone-500">
              {t.hero.bottom}
            </div>
          </section>
        </PaperCard>

        <section className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <PaperCard className="p-7">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
              {t.profile.label}
            </p>
            <h2 className="mb-5 text-4xl font-black uppercase leading-none tracking-[-0.05em]">
              {t.profile.title}
            </h2>
            <p className="leading-7 text-stone-700">{t.profile.text}</p>
            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">
              <div className="rounded-sm bg-white/40 p-4">
                <strong>{t.profile.educationTitle}</strong>
                <br />
                {t.profile.education}
              </div>
              <div className="rounded-sm bg-white/40 p-4">
                <strong>{t.profile.toolsTitle}</strong>
                <br />
                {t.profile.tools}
              </div>
            </div>
          </PaperCard>
          <PaperCard className="p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
                {t.fit.label}
              </p>
              <Sparkles className="h-5 w-5 text-[#e46aa3]" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {t.fit.cards.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-sm border border-stone-300 bg-[#eee7dd] p-4"
                >
                  <h3 className="mb-3 text-xl font-black leading-none tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="text-sm leading-6 text-stone-700">{text}</p>
                </div>
              ))}
            </div>
          </PaperCard>
        </section>

        <section id="skills" className="mt-10">
          <HandNote>{t.skillsNote}</HandNote>
          <h2 className="mt-2 text-5xl font-black uppercase tracking-[-0.06em] text-[#f6f0e6] md:text-7xl">
            {t.skillsTitle}
          </h2>
          <div className="mt-5 flex flex-nowrap gap-5 overflow-x-scroll overflow-y-hidden pb-8">
           {t.skills.map(([no, title, subtitle, proof, projects]) => (
  <PaperCard
    key={no}
    className="min-w-[85vw] max-w-[85vw] sm:min-w-[520px] sm:max-w-[520px] shrink-0 p-5 transition hover:-translate-y-1"
  >
                <span className="font-['Brush_Script_MT'] text-5xl text-[#e46aa3]">
                  {no}
                </span>
                <h3 className="mb-1 mt-4 text-2xl font-black leading-none tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mb-4 text-sm text-[#e46aa3]">{subtitle}</p>
                <ul className="space-y-3 text-sm leading-6 text-stone-700">
                  {proof.map((p) => (
                    <li key={p} className="border-l border-stone-400 pl-3">
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-stone-500">
                  {t.evidenceLabel}: {projects}
                </p>
              </PaperCard>
            ))}
          </div>
        </section>
        <section id="lumin-case" className="mt-14">
          <PaperCard className="overflow-hidden p-7 md:p-10">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
                  {t.luminCase.label}
                </p>

                <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  {t.luminCase.title}
                </h2>
              </div>

              <div className="self-end">
                <p className="max-w-3xl leading-7 text-stone-700">
                  {t.luminCase.intro}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {t.luminCase.cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-sm border border-stone-300 bg-[#eee7dd] p-5"
                >
                  <div className="absolute -right-5 -top-8 font-['Brush_Script_MT'] text-8xl text-[#ef75ad]/60">
                    {card.no}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 overflow-hidden rounded-sm border border-stone-300 bg-[#f6f0e6] p-2">
                      <div className="aspect-[4/3] w-full bg-[#eee7dd]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-full w-full rounded-sm object-contain"
                        />
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#f7d6e5] px-3 py-1 text-xs uppercase tracking-[0.16em] text-stone-700">
                        {isZh ? "Lumin 案例" : "Lumin Case"}
                      </span>

                      <span className="text-xs uppercase tracking-[0.16em] text-stone-500">
                        {isZh ? "产品研究" : "Product Research"}
                      </span>
                    </div>

                    <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-4xl">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#e46aa3]">
                      {card.subtitle}
                    </p>

                    <p className="mt-4 leading-7 text-stone-700">
                      {card.description}
                    </p>

                    <div className="mt-6">
                      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-stone-500">
                        {isZh ? "具体工作" : "What I did"}
                      </p>

                      <ul className="space-y-2 text-sm leading-6 text-stone-700">
                        {card.points.map((point) => (
                          <li
                            key={point}
                            className="border-l border-stone-400 pl-3"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </PaperCard>
        </section>
        <section id="crm-case" className="mt-14">
  <PaperCard className="overflow-hidden p-7 md:p-10">
    <div className="mb-10 border-b border-stone-300 pb-7">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e46aa3]">
        {isZh ? "客户关系管理案例" : "CRM & Customer Insight Case"}
      </p>

      <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
        {isZh
          ? "缥雪轻食客户关系管理优化"
          : "Piaoxue Light Meal CRM Optimization"}
      </h2>

      <p className="mt-6 max-w-4xl text-base leading-8 text-stone-700 md:text-lg">
        {isZh
          ? "本项目以校园轻食品牌“缥雪”为案例，结合用户访谈、管理者访谈、线上评论 OCR 收集、问卷反馈以及 SWOT、STP 等商业分析框架，对顾客感知与管理者策略进行双视角比较，并提出更具可扩展性的客户关系管理优化方案。"
          : "This project examined the customer relationship management practices of Piaoxue, a campus light-meal restaurant. By combining customer interviews, manager interviews, OCR-based online review collection, questionnaire feedback, and business frameworks such as SWOT and STP, the project identified CRM gaps and proposed scalable optimization strategies."}
      </p>
    </div>

    <div className="grid gap-5 md:grid-cols-4">
      {[
        {
          number: "15+",
          label: isZh ? "顾客访谈" : "Customer Interviews",
          text: isZh
            ? "半结构化访谈学生与教职工顾客，理解满意度、忠诚度与痛点。"
            : "Semi-structured interviews with student and faculty customers to understand satisfaction, loyalty and pain points.",
        },
        {
          number: "OCR",
          label: isZh ? "线上评论收集" : "Review Mining",
          text: isZh
            ? "使用 OCR 工具整理外卖平台用户评论，辅助判断真实消费体验。"
            : "Used OCR tools to collect and organize online food-ordering platform comments.",
        },
        {
          number: "SWOT / STP",
          label: isZh ? "商业分析" : "Business Analysis",
          text: isZh
            ? "通过 SWOT、STP 和竞品分析识别品牌定位与差异化机会。"
            : "Used SWOT, STP and competitor analysis to identify positioning and differentiation opportunities.",
        },
        {
          number: "5",
          label: isZh ? "CRM 维度" : "CRM Dimensions",
          text: isZh
            ? "从策略、价值创造、渠道、信息管理和绩效评估五个维度诊断问题。"
            : "Diagnosed CRM gaps from strategy, value creation, channels, information management and performance assessment.",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-sm border border-stone-300 bg-white/60 p-5"
        >
  <p className="text-5xl md:text-6xl font-black italic tracking-tight leading-none text-[#e46aa3]">
  {item.number}
</p>
          <h3 className="mt-4 text-xl font-black uppercase leading-none tracking-[-0.04em] text-stone-900">
            {item.label}
          </h3>

          <p className="mt-3 text-sm leading-6 text-stone-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e46aa3]">
          {isZh ? "研究流程" : "Research Process"}
        </p>

        <div className="space-y-4">
          {[
            isZh
              ? "用户研究：访谈学生与教职工顾客，识别他们对口味、健康、分量、价格和服务体验的真实感知。"
              : "Customer Research: Interviewed student and faculty customers to understand their perceptions of taste, health, portion size, price and service experience.",
            isZh
              ? "管理者研究：分析店主管理理念、服务策略、顾客互动方式和当前 CRM 实践。"
              : "Managerial Research: Analyzed the owners’ service philosophy, customer interaction style and current CRM practices.",
            isZh
              ? "线上评论分析：通过 OCR 工具收集并整理外卖平台评论，补充线下访谈样本。"
              : "Online Review Analysis: Used OCR tools to collect and organize takeaway-platform comments as supplementary customer data.",
            isZh
              ? "CRM 诊断：比较顾客感知与管理者意图，识别客户分层、反馈闭环、渠道沟通和绩效评估中的问题。"
              : "CRM Diagnosis: Compared customer perceptions with managerial intentions to identify gaps in segmentation, feedback loops, channel communication and performance tracking.",
          ].map((step, index) => (
            <div
              key={step}
              className="flex gap-4 border-l border-stone-400 pl-4"
            >
              <span className="font-['Brush_Script_MT'] text-3xl leading-none text-[#e46aa3]">
                0{index + 1}
              </span>
              <p className="text-sm leading-7 text-stone-700">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e46aa3]">
          {isZh ? "核心发现" : "Key Findings"}
        </p>

        <div className="space-y-4">
          {[
            {
              title: isZh
                ? "强个性化服务，但缺少系统化 CRM"
                : "Strong personalized service, but weak systematic CRM",
              text: isZh
                ? "缥雪依赖店主个人记忆和直接互动建立温暖体验，但这种“人脑数据库”难以规模化。"
                : "Piaoxue relies on owners’ personal memory and direct interaction to create warmth, but this informal “human-brain database” is difficult to scale.",
            },
            {
              title: isZh
                ? "顾客需求多元，但客户分层不够清晰"
                : "Diverse customer needs, but informal segmentation",
              text: isZh
                ? "不同顾客对健康、口味、分量、价格和新鲜感的期待不同，但品牌尚未形成明确的客户分层策略。"
                : "Customers have different expectations for health, taste, portion size, price and novelty, but the brand has not built a clear segmentation strategy.",
            },
            {
              title: isZh
                ? "有反馈来源，但缺少反馈闭环"
                : "Feedback exists, but lacks a closed-loop mechanism",
              text: isZh
                ? "线上评论和直接反馈能够反映问题，但尚未被稳定转化为产品、服务和沟通策略的持续优化。"
                : "Online reviews and direct feedback reveal customer problems, but they are not consistently translated into product, service and communication improvements.",
            },
          ].map((finding) => (
            <div
              key={finding.title}
              className="rounded-sm border border-stone-300 bg-white/60 p-5"
            >
              <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-stone-900">
                {finding.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">
                {finding.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-10 rounded-sm border border-stone-300 bg-[#f8f4ee] p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#e46aa3]">
        {isZh ? "优化建议" : "Recommendations"}
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          isZh
            ? "建立“反馈—行动—沟通”机制：收集顾客反馈后，将其转化为菜单、服务和沟通优化，并向顾客传达改进。"
            : "Build a feedback-action-communication loop: collect customer feedback, translate it into service or product improvements, and communicate changes back to customers.",
          isZh
            ? "优化客户分层：区分忠诚顾客、短期高价值顾客、不满意顾客和偶发顾客，制定差异化维护策略。"
            : "Refine customer segmentation: distinguish loyal customers, short-term profitable customers, dissatisfied users and occasional customers for targeted CRM actions.",
          isZh
            ? "系统化客户信息管理：从依赖个人记忆转向记录顾客偏好、投诉、复购行为和特殊需求。"
            : "Standardize customer information management: move from personal memory to structured records of preferences, complaints, repeat-purchase behavior and special requests.",
          isZh
            ? "建立 CRM 绩效指标：追踪满意度、复购率、推荐意愿、投诉解决率和渠道反馈表现。"
            : "Define CRM performance metrics: track satisfaction, repeat purchase, recommendation intention, complaint resolution and channel feedback performance.",
        ].map((rec) => (
          <p
            key={rec}
            className="border-l border-stone-400 pl-4 text-sm leading-7 text-stone-700"
          >
            {rec}
          </p>
        ))}
      </div>
    </div>

    <div className="mt-10">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#e46aa3]">
        {isZh ? "项目截图" : "Visual Evidence"}
      </p>

     <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {[
          {
            src: "/images/piaoxue-swot-stp.png",
            label: isZh ? "SWOT / STP 分析" : "SWOT / STP Analysis",
          },
          {
            src: "/images/piaoxue-customer-types.png",
            label: isZh ? "客户类型分析" : "Customer Type Analysis",
          },
      
        ].map((image) => (
          <a
            key={image.src}
            href={image.src}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-stone-200">
              <img
                src={image.src}
                alt={image.label}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="p-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
              {image.label}
            </p>
          </a>
        ))}
      </div>
    </div>

    <div className="mt-8 flex flex-wrap gap-2">
      {[
        "User Research",
        "CRM Analysis",
        "Customer Segmentation",
        "Online Review Mining",
        "SWOT / STP",
        "Strategy Recommendation",
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-sm text-stone-700"
        >
          {tag}
        </span>
      ))}
    </div>
  </PaperCard>
</section>
        <section id="ai-agent" className="mt-14">
          <PaperCard className="overflow-hidden p-7 md:p-10">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
                  {t.aiAgent.label}
                </p>

                <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  {t.aiAgent.title}
                </h2>
              </div>

              <div className="self-end">
                <p className="max-w-3xl leading-7 text-stone-700">
                  {t.aiAgent.intro}
                </p>
              </div>
            </div>

<div className="mt-8 space-y-5">
  {t.aiAgent.projects.map((agent, index) => (
    <details
      key={agent.title}
      className="group rounded-sm border border-stone-300 bg-[#eee7dd] p-6 shadow-sm"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e46aa3]">
            {isZh ? `AI 智能体 0${index + 1}` : `AI Agent 0${index + 1}`}
          </p>

          <h3 className="text-3xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-stone-900 md:text-4xl">
            {agent.title}
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#e46aa3]">
            {agent.subtitle}
          </p>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-600">
            {agent.description}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-stone-400 px-4 py-2 text-sm uppercase tracking-[0.16em] text-stone-700 transition group-open:bg-[#ef75ad] group-open:text-white">
          {isZh ? "点击展开" : "Open"}
        </span>
      </summary>

      <div className="mt-8 border-t border-stone-300 pt-7">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              {isZh ? "工作流程" : "Workflow"}
            </p>

            <div className="space-y-3">
              {agent.workflow.map((step) => (
                <p
                  key={step}
                  className="border-l border-stone-400 pl-4 text-sm leading-6 text-stone-700"
                >
                  {step}
                </p>
              ))}
            </div>

            <p className="mb-3 mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              {isZh ? "体现能力" : "Skills Demonstrated"}
            </p>

            <div className="flex flex-wrap gap-2">
              {agent.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-sm text-stone-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {agent.screenshots.map((shot) => (
              <a
                key={shot.src}
                href={shot.src}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="p-3 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  {shot.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </details>
  ))}
</div>
          </PaperCard>
        </section>
        <section id="video" className="mt-14">
          <PaperCard className="overflow-hidden p-7 md:p-10">
            <div className="mb-10">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
                {t.video.label}
              </p>
              <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                <BigTitle title={t.video.title} />
              </h2>
            </div>
            <div className="grid gap-8">
              {t.video.items.map((item, index) => (
                <VideoDownloadCard
                  key={item.title}
                  item={item}
                  index={index}
                  labels={t.video.buttons}
                />
              ))}
            </div>
          </PaperCard>
        </section>

        <section id="copywriting" className="mt-14">
          <PaperCard className="overflow-hidden p-7 md:p-10">
            <div className="mb-10 flex flex-col gap-6 border-b border-stone-300 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e46aa3]">
                  {isZh ? "实践能力 01" : "Practical Capability 01"}
                </p>

                <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  {isZh ? "文案撰写能力" : "Copywriting Capability"}
                </h2>
              </div>

              <div className="rounded-full border border-stone-400 px-5 py-2 text-sm uppercase tracking-[0.16em] text-stone-600">
                {isZh
                  ? "内容策划 · 文案输出 · 数据复盘"
                  : "Planning · Writing · Review"}
              </div>
            </div>

            {/* 数据证明 */}
            <div className="mb-10 grid gap-4 md:grid-cols-4">
              {[
                {
                  value: "10+",
                  label: isZh ? "高质量推文发布" : "Published Articles",
                  note: isZh
                    ? "展览及活动宣传内容"
                    : "Exhibition & campaign content",
                },
                {
                  value: "+20%",
                  label: isZh ? "平台总浏览量提升" : "Platform Views Growth",
                  note: isZh
                    ? "深圳天空美术馆实习期间"
                    : "During Shenzhen Sky Museum internship",
                },
                {
                  value: "1700+",
                  label: isZh ? "单篇推文阅读" : "Single-post Views",
                  note: isZh
                    ? "City Walk 内容营销项目"
                    : "City Walk content campaign",
                },
                {
                  value: "3x",
                  label: isZh ? "高于账号平均数据" : "Above Account Average",
                  note: isZh
                    ? "官方媒体内容传播案例"
                    : "Official media communication case",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-sm border border-stone-300 bg-[#f8f4ee] p-5 shadow-sm"
                >
                  <p className="text-5xl font-black tracking-[-0.06em] text-[#b39262] md:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-3 text-lg font-black tracking-[-0.03em] text-stone-900">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            {/* 能力解释 + 截图展示 */}
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                <div className="rounded-sm border border-stone-300 bg-[#eee7dd] p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-stone-500">
                    {isZh ? "核心能力" : "Core Capability"}
                  </p>

                  <h3 className="text-3xl font-black tracking-[-0.05em] text-stone-900">
                    {isZh
                      ? "从热点洞察到可发布内容"
                      : "From Trend Insight to Publishable Content"}
                  </h3>

                  <p className="mt-4 leading-7 text-stone-700">
                    {isZh
                      ? "我能够结合平台调性、热点趋势和传播目标，完成内容选题、文案撰写、图文排版、发布执行与数据复盘。相比单纯写作，我更关注内容能否被点击、被理解、被传播。"
                      : "I can turn platform tone, trend insights and communication goals into content topics, copy, visual layout, publishing plans and post-campaign review. My focus is not only writing, but whether the content can be clicked, understood and shared."}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: isZh ? "热点选题" : "Trend Selection",
                      text: isZh
                        ? "洞察 City Walk 热点，将城市漫步转化为官方媒体可发布的内容营销主题。"
                        : "Identified the City Walk trend and transformed it into a publishable official-media content topic.",
                    },
                    {
                      title: isZh ? "传播表达" : "Communication Writing",
                      text: isZh
                        ? "围绕展览、活动和文化空间，撰写更适合公众号和新媒体平台传播的文案。"
                        : "Wrote content for exhibitions, events and cultural spaces suitable for social media platforms.",
                    },
                    {
                      title: isZh ? "图文排版" : "Visual Layout",
                      text: isZh
                        ? "参与公众号内容编辑、图文排版与发布，使内容具备清晰阅读路径。"
                        : "Supported article editing, layout design and publishing to create a clear reading flow.",
                    },
                    {
                      title: isZh ? "数据复盘" : "Data Review",
                      text: isZh
                        ? "通过阅读量、平台浏览量和用户反馈判断内容效果，并为后续传播优化提供依据。"
                        : "Used views, platform traffic and user feedback to evaluate content performance and guide optimization.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-sm border border-stone-300 bg-white/60 p-5"
                    >
                      <h4 className="text-xl font-black tracking-[-0.04em] text-stone-900">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-stone-700">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 截图区域 */}
              <div className="rounded-sm border border-stone-300 bg-[#f8f4ee] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {isZh ? "文案 / 推文截图" : "Writing Samples"}
                  </p>

                  <p className="text-xs text-stone-500">
                    {isZh ? "可点击放大查看" : "Click to view"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "/images/copywriting/copy-1.jpg",
                    "/images/copywriting/copy-2.jpg",
                    "/images/copywriting/copy-3.jpg",
                    "/images/copywriting/copy-4.jpg",
                  ].map((src, index) => (
                    <a
                      key={src}
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="group overflow-hidden rounded-sm border border-stone-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                        <img
                          src={src}
                          alt={`copywriting sample ${index + 1}`}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </PaperCard>
        </section>

        <section id="event-planning" className="mt-14">
          <PaperCard className="overflow-hidden p-0">
            {/* 顶部 Hero */}
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#f8f4ee] p-7 md:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e46aa3]">
                  {isZh ? "实践能力 02" : "Practical Capability 02"}
                </p>

                <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  {isZh ? "活动策划与执行" : "Exhibition Planning & Execution"}
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                  {isZh
                    ? "以最新展览项目为例，我展示了从活动概念发散、宣传内容策划、资源协调到现场执行的完整项目推进能力。"
                    : "Using my latest exhibition project as a case, this page demonstrates my capability in concept development, content planning, resource coordination and on-site execution."}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {
                      value: "1",
                      label: isZh ? "核心展览项目" : "Core Exhibition Case",
                    },
                    {
                      value: "4",
                      label: isZh ? "推文传播素材" : "Promotion Articles",
                    },
                    {
                      value: "Multi",
                      label: isZh ? "多方资源协调" : "Stakeholder Coordination",
                    },
                    {
                      value: "End-to-end",
                      label: isZh ? "全流程执行参与" : "Full-process Execution",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="border border-stone-300 bg-white/70 p-4"
                    >
                      <p className="text-3xl font-black tracking-[-0.05em] text-[#b39262] md:text-4xl">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-5 text-stone-700">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#eee7dd] p-7 md:p-10">
                <div className="aspect-[4/3] overflow-hidden border border-stone-300 bg-white shadow-sm">
                  <img
                    src="/images/events/exhibition-hero.png"
                    alt="exhibition hero"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-stone-500">
                  {isZh
                    ? "图片位置：展览主视觉 / 现场主图 / 推文封面"
                    : "Image slot: key visual / exhibition scene / article cover"}
                </p>
              </div>
            </div>

            {/* 两个核心能力证明 */}
            <div className="bg-[#fffaf2] p-7 md:p-10">
              <div className="mb-10 border-b border-stone-300 pb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e46aa3]">
                  {isZh ? "能力证明" : "Capability Proof"}
                </p>

                <h3 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
                  {isZh
                    ? "从想法到落地的展览策划能力"
                    : "From Concept to Exhibition Delivery"}
                </h3>
              </div>

              <div className="grid gap-10">
                {/* 能力 01 */}
                <motion.article
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="grid gap-8 border-b border-stone-200 pb-10 lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div>
                    <p className="mb-3 text-6xl font-black tracking-[-0.08em] text-[#ef75ad]">
                      01
                    </p>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                      {isZh ? "Creative Planning" : "Creative Planning"}
                    </p>

                    <h4 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-stone-900 md:text-5xl">
                      {isZh ? "创意发散与主题转译" : "Concept Development"}
                    </h4>

                    <p className="mt-5 leading-8 text-stone-700">
                      {isZh
                        ? "在展览策划中，我不只是执行既有安排，而是尝试从展览主题、艺术家表达、观众兴趣和社交媒体传播角度出发，把较抽象的展览内容转化为更容易被理解、被记住、被传播的活动表达。"
                        : "In exhibition planning, I do not only execute existing arrangements. I translate abstract exhibition themes, artists’ expressions and audience interests into clearer and more communicable event concepts."}
                    </p>

                    <div className="mt-6 space-y-3">
                      {[
                        isZh
                          ? "提炼展览核心主题，转化为观众更容易理解的传播角度。"
                          : "Extracted the core exhibition theme and turned it into audience-friendly communication angles.",
                        isZh
                          ? "围绕展览亮点进行推文选题、标题设计与内容包装。"
                          : "Developed article topics, titles and content packaging around exhibition highlights.",
                        isZh
                          ? "将艺术表达、现场体验和社交媒体传播结合起来，增强活动的可看性与可传播性。"
                          : "Connected artistic expression, on-site experience and social media communication to improve visibility.",
                      ].map((point) => (
                        <p
                          key={point}
                          className="border-l-2 border-[#ef75ad] pl-4 text-sm leading-6 text-stone-700"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr]">
                    <div className="aspect-[3/4] overflow-hidden border border-stone-300 bg-[#eee7dd] shadow-sm">
                      <img
                        src="/images/events/concept-vertical.jpg"
                        alt="exhibition concept"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="aspect-[4/3] overflow-hidden border border-stone-300 bg-[#eee7dd] shadow-sm">
                        <img
                          src="/images/events/concept-scene-1.jpeg"
                          alt="exhibition scene"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* 能力 02 */}
                <motion.article
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
                >
                  <div className="order-2 lg:order-1">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="aspect-[4/3] overflow-hidden border border-stone-300 bg-[#eee7dd] shadow-sm">
                        <img
                          src="/images/events/onsite-1.jpeg"
                          alt="onsite execution 1"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="aspect-[4/3] overflow-hidden border border-stone-300 bg-[#eee7dd] shadow-sm">
                        <img
                          src="/images/events/onsite-2.jpeg"
                          alt="onsite execution 2"
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="aspect-[4/3] overflow-hidden border border-stone-300 bg-[#eee7dd] shadow-sm md:col-span-2">
                        <img
                          src="/images/events/onsite-3.jpeg"
                          alt="onsite execution 3"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-stone-500">
                      {isZh
                        ? "图片位置：布展现场 / 活动现场 / 观众互动 / 工作花絮"
                        : "Image slots: setup scene / event scene / visitor interaction / behind the scenes"}
                    </p>
                  </div>

                  <div className="order-1 lg:order-2">
                    <p className="mb-3 text-6xl font-black tracking-[-0.08em] text-[#ef75ad]">
                      02
                    </p>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                      {isZh
                        ? "Execution & Coordination"
                        : "Execution & Coordination"}
                    </p>

                    <h4 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-stone-900 md:text-5xl">
                      {isZh ? "资源整合与现场执行" : "Resource Coordination"}
                    </h4>

                    <p className="mt-5 leading-8 text-stone-700">
                      {isZh
                        ? "活动策划不是只提出创意，更重要的是把创意拆解成可以执行的流程。我在项目中关注人员沟通、物料准备、宣传节奏、现场布置和执行细节，确保展览从方案进入真实空间后仍然顺利运行。"
                        : "Event planning is not only about ideas, but turning them into executable workflows. I focus on communication, materials, promotion rhythm, on-site setup and execution details to ensure smooth delivery."}
                    </p>

                    <div className="mt-6 grid gap-4">
                      {[
                        {
                          title: isZh
                            ? "多方沟通"
                            : "Stakeholder Communication",
                          text: isZh
                            ? "协调艺术家、场地、团队成员、宣传渠道与现场人员，保证信息同步。"
                            : "Coordinated artists, venue, team members, promotion channels and on-site staff.",
                        },
                        {
                          title: isZh ? "流程推进" : "Process Management",
                          text: isZh
                            ? "将展览任务拆解为时间节点、物料准备、现场安排和传播动作。"
                            : "Broke exhibition tasks into timeline, material preparation, on-site arrangement and promotion actions.",
                        },
                        {
                          title: isZh ? "现场落地" : "On-site Delivery",
                          text: isZh
                            ? "跟进布展、拍摄记录、观众动线和突发问题处理，保证活动顺畅进行。"
                            : "Followed up setup, documentation, visitor flow and unexpected issues to support smooth execution.",
                        },
                      ].map((item) => (
                        <div
                          key={item.title}
                          className="rounded-sm border border-stone-300 bg-white/70 p-5"
                        >
                          <h5 className="text-xl font-black tracking-[-0.04em] text-stone-900">
                            {item.title}
                          </h5>
                          <p className="mt-2 text-sm leading-6 text-stone-700">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </PaperCard>
        </section>
        <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <PaperCard className="p-7">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
              {t.timelineLabel}
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.05em]">
              {t.timelineTitle}
            </h2>
            <div className="space-y-5">
              {t.timeline.map(([time, company, role, detail]) => (
                <div
                  key={company}
                  className="grid gap-2 border-t border-stone-300 pt-4 md:grid-cols-[130px_1fr]"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-stone-500">
                    {time}
                  </p>
                  <div>
                    <h3 className="text-xl font-black tracking-[-0.03em]">
                      {company}
                    </h3>
                    <p className="text-sm font-semibold text-[#e46aa3]">
                      {role}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-stone-700">
                      {detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PaperCard>
          <PaperCard className="p-7">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#e46aa3]">
              {t.awardsLabel}
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.05em]">
              {t.awardsTitle}
            </h2>
            <ul className="space-y-4 text-sm leading-6 text-stone-700">
              {t.awards.map((award) => (
                <li key={award} className="border-l border-stone-400 pl-4">
                  {award}
                </li>
              ))}
            </ul>
          </PaperCard>
        </section>

        <section id="contact" className="mt-10">
          <PaperCard className="overflow-hidden p-7 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
              <div>
                <HandNote>{t.contact.note}</HandNote>
                <h2 className="mt-2 text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-8xl">
                  <BigTitle title={t.contact.title} />
                </h2>
              </div>
              <div className="self-end">
                <p className="mb-6 max-w-xl leading-7 text-stone-700">
                  {t.contact.text}
                </p>
                <div className="grid gap-3 text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 rounded-sm bg-[#eee7dd] p-4 transition hover:bg-[#f7d6e5]"
                  >
                    <Mail className="h-4 w-4" /> {profile.email}
                  </a>
                  <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center gap-3 rounded-sm bg-[#eee7dd] p-4 transition hover:bg-[#f7d6e5]"
                  >
                    <Phone className="h-4 w-4" /> {profile.phone}
                  </a>
                  <div className="flex items-center gap-3 rounded-sm bg-[#eee7dd] p-4">
                    <MapPin className="h-4 w-4" /> {t.contact.location}
                  </div>
                  <button className="flex items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 font-semibold text-[#f6f0e6] transition hover:-translate-y-1 hover:bg-[#e46aa3]">
                    <Download className="h-4 w-4" /> {t.contact.download}
                  </button>
                </div>
              </div>
            </div>
          </PaperCard>
        </section>
      </div>
    </main>
  );
}
