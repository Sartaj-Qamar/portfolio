"""Generate a polished professional CV PDF for Sartaj Qamar."""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black, white
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, ListFlowable, ListItem, KeepTogether
)
import os

# ---- Palette ----
NAVY = HexColor("#0B2C4E")
ACCENT = HexColor("#1F6FEB")
DARK = HexColor("#1B1F23")
MUTED = HexColor("#586069")
RULE = HexColor("#D0D7DE")
SOFT_BG = HexColor("#F6F8FA")

# ---- Styles ----
name_style = ParagraphStyle(
    "name", fontName="Helvetica-Bold", fontSize=22, textColor=NAVY,
    leading=26, spaceAfter=2, alignment=TA_LEFT,
)
title_style = ParagraphStyle(
    "title", fontName="Helvetica", fontSize=12, textColor=ACCENT,
    leading=14, spaceAfter=4, alignment=TA_LEFT,
)
contact_style = ParagraphStyle(
    "contact", fontName="Helvetica", fontSize=9, textColor=MUTED,
    leading=12, alignment=TA_LEFT,
)
section_style = ParagraphStyle(
    "section", fontName="Helvetica-Bold", fontSize=11, textColor=NAVY,
    leading=14, spaceBefore=10, spaceAfter=4, alignment=TA_LEFT,
)
body_style = ParagraphStyle(
    "body", fontName="Helvetica", fontSize=9.5, textColor=DARK,
    leading=13, alignment=TA_JUSTIFY,
)
role_style = ParagraphStyle(
    "role", fontName="Helvetica-Bold", fontSize=10, textColor=DARK,
    leading=12,
)
company_style = ParagraphStyle(
    "company", fontName="Helvetica-Oblique", fontSize=9.5, textColor=ACCENT,
    leading=12,
)
date_style = ParagraphStyle(
    "date", fontName="Helvetica", fontSize=9, textColor=MUTED,
    leading=12, alignment=TA_LEFT,
)
bullet_style = ParagraphStyle(
    "bullet", fontName="Helvetica", fontSize=9.5, textColor=DARK,
    leading=13, alignment=TA_JUSTIFY, leftIndent=10, bulletIndent=0,
)
skill_label = ParagraphStyle(
    "skill_label", fontName="Helvetica-Bold", fontSize=9, textColor=NAVY, leading=12,
)
skill_value = ParagraphStyle(
    "skill_value", fontName="Helvetica", fontSize=9, textColor=DARK, leading=12,
)


def section(title):
    return [
        Paragraph(title.upper(), section_style),
        HRFlowable(width="100%", thickness=0.7, color=ACCENT, spaceAfter=4),
    ]


def experience(role, company, location, dates, bullets):
    header_tbl = Table(
        [[Paragraph(f"{role}", role_style), Paragraph(dates, date_style)]],
        colWidths=[4.6 * inch, 2.2 * inch],
    )
    header_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    items = ListFlowable(
        [ListItem(Paragraph(b, bullet_style), leftIndent=10, value="•")
         for b in bullets],
        bulletType="bullet", start="•", leftIndent=10, bulletFontSize=8,
        bulletColor=ACCENT, spaceBefore=2, spaceAfter=2,
    )
    return KeepTogether([
        header_tbl,
        Paragraph(f"{company} &nbsp;·&nbsp; {location}", company_style),
        Spacer(1, 2),
        items,
        Spacer(1, 4),
    ])


def build(output_path):
    doc = SimpleDocTemplate(
        output_path, pagesize=LETTER,
        leftMargin=0.55 * inch, rightMargin=0.55 * inch,
        topMargin=0.5 * inch, bottomMargin=0.5 * inch,
        title="Sartaj Qamar — Resume",
        author="Sartaj Qamar",
    )
    story = []

    # ---- Header ----
    story.append(Paragraph("SARTAJ QAMAR", name_style))
    story.append(Paragraph("Senior Android / Mobile Software Engineer", title_style))
    contact_line = (
        "Rawalpindi, Pakistan &nbsp;|&nbsp; +92 336 220 3156 &nbsp;|&nbsp; "
        '<a href="mailto:sartajqamar111@gmail.com" color="#1F6FEB">sartajqamar111@gmail.com</a>'
        " &nbsp;|&nbsp; "
        '<a href="https://linkedin.com/in/sartaj-qamar" color="#1F6FEB">linkedin.com/in/sartaj-qamar</a>'
        " &nbsp;|&nbsp; "
        '<a href="https://sartaj-qamar.vercel.app" color="#1F6FEB">sartaj-qamar.vercel.app</a>'
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.2, color=NAVY))

    # ---- Summary ----
    story.extend(section("Professional Summary"))
    summary = (
        "Results-driven Android Developer with 2+ years of hands-on experience architecting, "
        "developing, and shipping high-performance mobile applications using <b>Kotlin</b> and "
        "modern Android frameworks. Currently building a healthcare Companion App at "
        "<b>CareCloud</b>, integrating <b>Cirrus AI</b> to generate real-time clinical notes from "
        "patient–doctor conversations — directly aligned with HIPAA-compliant, AI-driven "
        "healthcare mobile development. Deep expertise in <b>MVVM / Clean Architecture</b>, "
        "<b>Jetpack Compose</b>, <b>Coroutines</b>, secure data handling, and RESTful API "
        "integration. Proven track record delivering reliable, scalable apps with a strong focus "
        "on performance, accessibility (WCAG/TalkBack), and security. Experienced in CI/CD, "
        "automated testing, and Agile workflows."
    )
    story.append(Paragraph(summary, body_style))

    # ---- Skills ----
    story.extend(section("Core Technical Skills"))
    skills = [
        ("Languages", "Kotlin (primary), Java"),
        ("Architecture", "MVVM, Clean Architecture, Repository Pattern"),
        ("UI Frameworks", "Jetpack Compose, XML Layouts, Material Design 3"),
        ("Concurrency", "Coroutines, Flow, WorkManager, Services"),
        ("Data & Storage", "Room DB, SQLite, Shared Preferences, Android Keystore"),
        ("Networking", "Retrofit, OkHttp, RESTful APIs, JSON parsing"),
        ("Cloud / Backend", "Firebase (Auth, Firestore, FCM), AWS basics, Azure basics"),
        ("Testing", "JUnit, Espresso, UI Automator, Mockito"),
        ("CI/CD & Tooling", "Git, GitHub, Fastlane, Play Store deployment"),
        ("AI-Assisted Dev", "GitHub Copilot, CursorAI"),
        ("Security", "Encryption at rest/transit, certificate pinning, secure key mgmt"),
        ("Accessibility", "TalkBack, WCAG guidelines, inclusive design"),
        ("Project Tools", "JIRA, Confluence, Agile / Scrum"),
        ("Profiling", "Android Studio Profiler (CPU, Memory, Network)"),
    ]
    # 2-column skills table
    rows = []
    for i in range(0, len(skills), 2):
        left = skills[i]
        right = skills[i + 1] if i + 1 < len(skills) else ("", "")
        rows.append([
            Paragraph(left[0], skill_label), Paragraph(left[1], skill_value),
            Paragraph(right[0], skill_label), Paragraph(right[1], skill_value),
        ])
    skills_tbl = Table(rows, colWidths=[1.05 * inch, 2.3 * inch, 1.05 * inch, 2.3 * inch])
    skills_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("ROWBACKGROUNDS", (0, 0), (-1, -1), [SOFT_BG, white]),
    ]))
    story.append(skills_tbl)

    # ---- Experience ----
    story.extend(section("Professional Experience"))

    story.append(experience(
        "Android Developer", "CareCloud", "Islamabad, Pakistan",
        "Jan 2026 – Present",
        [
            "Building a Companion App for healthcare providers — a real-time communication platform enabling seamless patient–doctor conversations within a HIPAA-compliant Android environment.",
            "Implementing <b>Cirrus AI Notes</b> integration: automatically generating structured clinical notes from patient–doctor conversations using AI, enabling doctors to capture and review every key patient detail efficiently.",
            "Designing secure audio/conversation pipelines with end-to-end encryption, certificate pinning, and Android Keystore for sensitive patient data in compliance with HIPAA and WCAG standards.",
            "Architecting the app using MVVM / Clean Architecture with Jetpack Compose, Coroutines, and Flow for a fully reactive, accessible UI across diverse device form factors.",
            "Collaborating cross-functionally with Product, Design, and Backend teams to deliver AI-driven clinical features from concept through QA to production release.",
        ],
    ))

    story.append(experience(
        "Android App Developer", "MileTap", "Karachi, Pakistan",
        "Apr 2025 – Nov 2025",
        [
            "Architected and developed high-quality Android applications in Kotlin with Jetpack Compose, targeting scalability and Clean Architecture principles.",
            "Implemented MVVM with Repository pattern, leveraging Coroutines & Flow for fully reactive, non-blocking UI behaviour.",
            "Integrated RESTful APIs via Retrofit/OkHttp and managed local persistence with Room DB and Shared Preferences.",
            "Collaborated with designers and backend engineers to deliver polished, user-focused experiences aligned with product specifications.",
            "Utilised GitHub Copilot / CursorAI to accelerate feature development, refactoring, and inline documentation.",
        ],
    ))

    story.append(experience(
        "Freelance Android Developer", "Self-Employed", "Remote",
        "Nov 2024 – Apr 2025",
        [
            "Designed and delivered end-to-end Android solutions for multiple clients, owning the full lifecycle from requirement gathering to Play Store release.",
            "Built diverse applications (AI Story Generator, Speech-to-Text, Passport Photo Editor) demonstrating breadth across media, on-device ML, and system APIs.",
            "Applied performance profiling tools to resolve memory leaks and reduce ANRs, improving crash-free rate significantly.",
            "Maintained clean Git workflows with branching strategies (Git Flow) and delivered projects within agreed sprint timelines.",
        ],
    ))

    story.append(experience(
        "Android Developer", "NineSol Technologies", "Islamabad, Pakistan",
        "Nov 2023 – Nov 2024",
        [
            "Developed and maintained production Android apps in Kotlin using MVVM architecture and modern Android Jetpack libraries.",
            "Integrated JSON-based REST APIs and handled edge-case error management to ensure reliable data flow across unstable network conditions.",
            "Implemented Room Database and Shared Preferences for offline-first data strategies, improving app usability in low-connectivity scenarios.",
            "Conducted extensive device and OS version testing, collaborating with QA to reduce crash rates and improve app store ratings.",
            "Contributed to multiple published Play Store apps, ensuring consistent adherence to Google's quality and policy guidelines.",
        ],
    ))

    # ---- Projects ----
    story.extend(section("Key Projects"))
    projects = [
        ("Workwise App", "Enterprise productivity app — implemented MVVM + Room + Retrofit stack; built offline sync with background WorkManager jobs."),
        ("AI Story Generator", "On-device ML integration for AI-driven narrative content; optimised inference pipeline for low-latency responses on mid-range devices."),
        ("Speech-to-Text App", "Real-time audio processing using Android SpeechRecognizer API with custom UI for accessibility compliance (TalkBack-compatible)."),
        ("Passport Photo Editor", "Image processing and cropping tool with multi-resolution export; profiled and resolved memory pressure issues on entry-level devices."),
        ("Auto-Connect Bluetooth", "Background service managing BLE device discovery and auto-pairing with persistent foreground notification and battery optimisations."),
        ("Resuming App", "Template-driven PDF resume builder with dynamic data binding, demonstrating PDF generation and complex RecyclerView layouts."),
    ]
    proj_rows = [[Paragraph(f"<b>{n}</b>", skill_label), Paragraph(d, body_style)] for n, d in projects]
    proj_tbl = Table(proj_rows, colWidths=[1.55 * inch, 5.25 * inch])
    proj_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("LINEBELOW", (0, 0), (-1, -2), 0.3, RULE),
    ]))
    story.append(proj_tbl)

    # ---- Education ----
    story.extend(section("Education"))
    edu_tbl = Table(
        [[
            Paragraph("<b>Bachelor of Science in Computer Science</b><br/>"
                      "<font color='#1F6FEB'>University of Azad Jammu and Kashmir</font> · Pakistan",
                      body_style),
            Paragraph("2016 – 2020", date_style),
        ]],
        colWidths=[4.8 * inch, 2.0 * inch],
    )
    edu_tbl.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(edu_tbl)

    doc.build(story)


if __name__ == "__main__":
    out_dir = r"c:\Users\sartajqamar2\Downloads"
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "Sartaj_Qamar_Resume_Professional.pdf")
    build(out_path)

    # Also place it in the portfolio public/cv folder
    portfolio_cv = r"c:\Users\sartajqamar2\Desktop\Github\My-Portfolio-main\My-Portfolio-main\public\cv\Sartaj_Qamar_Resume_Professional.pdf"
    build(portfolio_cv)
    print("Generated:")
    print(" -", out_path)
    print(" -", portfolio_cv)
