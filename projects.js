// Edit this file to add or update projects. All media/link fields are optional.
// Put local attachments under assets/projects/<slug>/, or use an external URL.
window.PORTFOLIO_PROJECTS = [
  {
    slug: 'freshpeek', title: 'FreshPeek', subtitle: 'Smart refrigerator inventory retrofit', year: '2026', category: 'Connected systems', featured: true,
    tags: ['Raspberry Pi 4', 'Picamera2', 'SwiftUI', 'Supabase', 'PostgreSQL'],
    summary: 'An edge-to-cloud prototype that detects fridge-door events, interprets ordered camera frames, and synchronizes a grocery inventory with an iOS interface.',
    overview: 'Built for HackMIT 2026. The system uses a Raspberry Pi 4 and Camera Module 3 Wide for image capture, cloud multimodal vision for grocery recognition, Supabase for event ingestion and state, and a native SwiftUI app for inventory management. Model inference runs in the cloud, not on the Raspberry Pi.',
    highlights: ['Implemented brightness-based door-event detection with separate open/close thresholds and short-exposure frame capture.', 'Designed an ordered-frame recognition workflow for items entering and leaving the refrigerator.', 'Added event UUIDs, upload retries, and idempotent database updates to protect inventory consistency.', 'Built iOS flows for inventory corrections, expiration tracking, and recipe suggestions.'],
    links: [{label:'Source code', url:'https://github.com/leoyang068/FreshPeek'}], media: [], files: []
  },
  {
    slug: 'smart-guitar', title: 'Smart Guitar Learning System', subtitle: 'MIDI-to-fretboard visual guidance', year: 'Prototype', category: 'Embedded systems', featured: true,
    tags: ['Arduino Uno', 'Python', 'MIDI', 'WS2812B', 'Serial'],
    summary: 'An instrument-mounted LED guidance system that maps MIDI events to individually addressable guitar-neck lights.',
    overview: 'Two strips of WS2812B LEDs mounted along a guitar neck provide color-coded guidance. A Python process parses MIDI pitch and timing events and streams scheduled commands to an Arduino Uno.',
    highlights: ['Created a physical LED-index map for unevenly spaced fretboard positions.', 'Displayed multiple simultaneous notes for chords.', 'Streamed MIDI events instead of storing full songs in limited microcontroller memory.', 'Explored audio-to-MIDI feedback approaches; low-latency real-time detection was not completed.'],
    links: [], media: [], files: []
  },
  {
    slug: 'deskpad-vision', title: 'Deskpad Vision', subtitle: 'Mirror-assisted laptop interaction', year: 'Prototype', category: 'Computer vision', featured: true,
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Optics', 'macOS'],
    summary: 'A mirror accessory redirects a laptop webcam toward the palm rests, enabling additional gesture-control regions without a second camera.',
    overview: 'Designed and fabricated a lightweight acrylic-mirror and cardstock accessory to redirect the built-in MacBook camera. Explored image-registration and computer-vision pipelines for cursor interaction.',
    highlights: ['Built an adjustable physical camera-redirection prototype.', 'Evaluated MediaPipe, geometric registration, and Quartz-based cursor control.', 'Demonstrated cursor and contact interactions in defined palm-rest zones.', 'Cross-user and cross-environment reliability has not yet been quantified.'],
    links: [], media: [], files: []
  },
  {
    slug: 'esp32-screen-time', title: 'ESP32 Screen-Time Feedback Phone Case', subtitle: 'Android-to-hardware behavioral feedback', year: '2025', category: 'Embedded systems', featured: true,
    tags: ['ESP32', 'Kotlin', 'Android', 'Bluetooth', 'GPIO'],
    summary: 'A Kotlin Android app tracks application usage and sends Bluetooth commands to an ESP32-driven phone-case prototype when configurable limits are crossed.',
    overview: 'The Android application uses usage-access permissions to monitor per-app screen time, supports configurable thresholds, and communicates by Bluetooth with an ESP32. The hardware prototype integrates relay-controlled actuation of a repurposed electronic circuit.',
    highlights: ['Implemented per-app usage monitoring and user-configurable screen-time thresholds.', 'Connected Android software with ESP32 hardware through Bluetooth.', 'Integrated GPIO-controlled relay switching into a phone-case prototype.'],
    links: [], media: [], files: []
  },
  {
    slug: 'adc-breakout', title: 'ADC Breakout Board', subtitle: 'Columbia Formula 1 Club · PCB layout practice', year: '2026', category: 'PCB design', featured: true,
    tags: ['Altium Designer', 'Schematic', 'PCB Layout', 'Ground Pour'],
    summary: 'A first Altium schematic and PCB-layout exercise exploring analog-signal routing, footprints, ground copper, and board connectivity.',
    overview: 'An introductory design exercise associated with Columbia Formula 1 Club. Created an ADC breakout schematic and an initial PCB layout, then shared it through an Altium workspace for feedback. This is a design practice project, not a fabricated or electrically validated board.',
    highlights: ['Worked with schematic symbols, footprints, placement, and net-based routing.', 'Practiced ground copper-pour setup and considered signal-return paths.', 'Reviewed power, ground, and analog-net connectivity.'],
    links: [], media: [], files: []
  },
  {
    slug: 'arm-length-sensing', title: 'Wearable Arm-Length Estimation', subtitle: 'Columbia biomedical engineering research', year: '2024', category: 'Research', featured: false,
    tags: ['Accelerometers', 'Python', 'Signal processing', 'Calibration'],
    summary: 'A physics-based sensing approach for estimating upper-arm length from triaxial accelerometer measurements in constrained calibration windows.',
    overview: 'Undergraduate research in Columbia Biomedical Engineering with Prof. Samuel Sia, mentored by Terry Chern. Investigated motion-state gating, orientation checks, filtering, and controlled mechanical measurements for wearable blood-pressure-system research.',
    highlights: ['Reframed continuous estimation as estimation during valid, constrained measurement intervals.', 'Explored gravity-referenced orientation checks and Kalman/noise filtering.', 'Fabricated a repeatable mechanical-arm fixture for controlled tests.'],
    links: [], media: [], files: []
  },
  {
    slug: 'afm-surface', title: 'AFM Surface Characterization', subtitle: 'Reed College physics research', year: '2023', category: 'Research', featured: false,
    tags: ['AFM', 'Python', 'Materials', 'Surface analysis'],
    summary: 'Atomic-force microscopy and Python height-map analysis to investigate silicon-substrate surfaces in a graphene exfoliation workflow.',
    overview: 'Undergraduate research in Reed College Physics with Prof. Jennifer Heath, supporting comparisons of substrate cleaning approaches and graphene exfoliation preparation.',
    highlights: ['Captured and interpreted AFM silicon-wafer surface topography.', 'Parsed 2D AFM height maps in Python and flagged unusual topographic regions.', 'Studied sample preparation and measurement limitations.'],
    links: [], media: [], files: []
  },
  {
    slug: 'eternal-ninja', title: 'Eternal Ninja', subtitle: 'Independent Unity platform game', year: '2024', category: 'Software', featured: false,
    tags: ['Unity', 'C#', 'Game design', 'Animation'],
    summary: 'Designed, illustrated, animated, and published a 50-level side-scrolling platform game on Steam.',
    overview: 'An independently built platform game featuring custom hand-drawn artwork, frame-by-frame character animation, traps, timing puzzles, and level progression.',
    highlights: ['Built game logic and 50 levels in Unity/C#.', 'Created character artwork and animations by hand.', 'Managed playtesting, iteration, and Steam publishing.'],
    links: [], media: [], files: []
  },
  {
    slug: 'headphone-tetris', title: 'Headphone-Controlled Tetris', subtitle: 'Alternative-input iOS interface', year: 'Prototype', category: 'Software', featured: false,
    tags: ['iOS', 'Input mapping', 'Interaction design'],
    summary: 'A playable Tetris interface controlled through wired-headset buttons instead of direct touch input.',
    overview: 'Mapped headset volume presses and play/pause sequences to game controls and experimented with input continuity as system audio state changed.',
    highlights: ['Designed button sequences for move, rotate, and hard drop.', 'Handled system-volume recentering and suppression of synthetic events.', 'Improved event buffering and handling of irregular callbacks.'],
    links: [], media: [], files: []
  }
];
