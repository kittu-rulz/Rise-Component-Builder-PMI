/**
 * Starter Presets & Real Workplace Scenarios
 * Section 7 of Rise Component Builder Next-Level Architecture
 * Covers all 26 components with realistic project-management scenarios that instantly populate a
 * block. The content is illustrative sample material for authors to adapt, not PMI policy.
 */

export const WORKPLACE_PRESETS = [
  // 1. Accordion (accordion)
  {
    id: 'project-kickoff-essentials',
    componentId: 'accordion',
    title: 'Project Kickoff Essentials',
    name: 'Project Kickoff Essentials',
    description: 'Walk through the four things every kickoff meeting should settle before the team starts work.',
    domain: 'Project Kickoff',
    config: {
      blockTitle: 'PROJECT KICKOFF GUIDE',
      blockHeadline: 'Running an Effective Project Kickoff',
      blockDesc: 'Expand each step to review what to cover and who needs to be in the room.',
      accordionMulti: false,
      accordionAnimation: true,
      accordionSequential: true,
      accordionShowProgress: true,
      accordionShowVisitedBadge: true,
      accordionExpandCollapseAll: true,
      accordionSearch: true,
      accordionAllowReset: true,
      items: [
        {
          title: 'Step 1: Confirm Purpose and Success Measures',
          subtitle: 'Before the meeting: circulate the charter',
          content: 'Restate why the project exists, what the sponsor expects, and how success will be measured. Make sure everyone can say the objective in one sentence before moving on.',
          badge: 'Start here',
          badgeType: 'info'
        },
        {
          title: 'Step 2: Agree Roles and Decision Rights',
          subtitle: 'In the meeting: 15 minutes',
          content: 'Name the sponsor, project manager, team leads and key stakeholders. Be explicit about who decides what, who must be consulted, and who only needs to be informed.',
          badge: 'Priority',
          badgeType: 'warning'
        },
        {
          title: 'Step 3: Walk Through Scope, Milestones and Risks',
          subtitle: 'In the meeting: 20 minutes',
          content: 'Review what is in and out of scope, the major milestones, and the top risks already identified. Invite the team to challenge assumptions and add risks you have not seen yet.',
          badge: 'Critical',
          badgeType: 'danger'
        },
        {
          title: 'Step 4: Set Working Agreements and Next Steps',
          subtitle: 'After the meeting: within one day',
          content: 'Agree how the team will communicate, when status is reviewed, and how changes are raised. Send a short summary with owners and dates for every action.',
          badge: 'Wrap-up',
          badgeType: 'success'
        }
      ]
    }
  },

  // 2. Horizontal Tabs (tab-blocks)
  {
    id: 'tab-delivery-approaches',
    componentId: 'tab-blocks',
    title: 'Predictive, Agile and Hybrid Delivery',
    name: 'Predictive, Agile and Hybrid Delivery',
    description: 'Compare how the three main delivery approaches handle planning, change and stakeholder involvement.',
    domain: 'Ways of Working',
    config: {
      tabsOrientation: 'horizontal',
      tabsSequential: false,
      tabsShowProgress: true,
      tabsShowVisitedBadge: true,
      tabsNumbered: true,
      tabsCompareMode: false,
      items: [
        {
          title: 'Predictive',
          content: 'Scope, schedule and cost are defined early and managed against a baseline. Changes go through formal control. It suits work with stable requirements, heavy dependencies or regulatory traceability.'
        },
        {
          title: 'Agile',
          content: 'Teams deliver working increments in short cycles and reprioritise the backlog using feedback. Scope flexes to protect time and quality. It suits work where requirements will emerge as people see results.'
        },
        {
          title: 'Hybrid',
          content: 'A predictive frame sets milestones, budget and governance while teams deliver inside it iteratively. It suits large programs that combine fixed commitments with uncertain detail.'
        },
        {
          title: 'Choosing an Approach',
          content: 'Consider how well requirements are understood, how often stakeholders can give feedback, the cost of change, and any contractual or regulatory constraints. Agree the approach with the sponsor and record it in the plan.'
        }
      ]
    }
  },

  // 3. 3D Flip Cards / Study Cards (flip-cards)
  {
    id: 'fc-project-management-terms',
    componentId: 'flip-cards',
    title: 'Project Management Terms Mastery',
    name: 'Project Management Terms Mastery',
    description: 'Study-mode flashcards drilling the core vocabulary of project planning and control.',
    domain: 'Project Fundamentals',
    config: {
      flipCardsMode: 'study',
      flipCardsShuffle: true,
      flipCardsCategories: true,
      flipCardsSummary: true,
      flipCardsReset: true,
      flipCardsFrontLabel: 'Term',
      flipCardsBackLabel: 'Definition',
      items: [
        {
          title: 'Scope',
          content: 'The sum of the products, services and results a project will deliver, and the work needed to deliver them.',
          category: 'Planning'
        },
        {
          title: 'Scope Creep',
          content: 'Uncontrolled growth in scope after the project has started, without matching changes to time, cost or resources.',
          category: 'Planning'
        },
        {
          title: 'Critical Path',
          content: 'The longest sequence of dependent activities. A delay to any of them delays the finish date of the project.',
          category: 'Schedule'
        },
        {
          title: 'Float (Slack)',
          content: 'The amount of time an activity can slip without delaying the next activity or the project finish date.',
          category: 'Schedule'
        },
        {
          title: 'Stakeholder',
          content: 'An individual, group or organisation that may affect, be affected by, or perceive itself to be affected by the project.',
          category: 'People'
        },
        {
          title: 'RACI Matrix',
          content: 'A chart that shows who is Responsible, Accountable, Consulted and Informed for each activity or deliverable.',
          category: 'People'
        },
        {
          title: 'Sprint',
          content: 'A short, fixed-length iteration in agile delivery in which a team completes a set of work and demonstrates the result.',
          category: 'Agile'
        },
        {
          title: 'Retrospective',
          content: 'A regular team meeting to look at how the work went and agree changes that will improve the next iteration.',
          category: 'Agile'
        }
      ]
    }
  },

  // 4. Interactive Hotspots (hotspots)
  {
    id: 'hs-project-war-room',
    componentId: 'hotspots',
    title: 'Project Control Room Walkthrough',
    name: 'Project Control Room Walkthrough',
    description: 'Explore the boards and artefacts a project manager uses to keep delivery visible, with zoom and drawer details.',
    domain: 'Project Control',
    config: {
      title: 'Project Control Room Walkthrough',
      content: 'Select the highlighted markers or use the zoom controls to explore the main artefacts in a project control room.',
      calloutMode: 'drawer',
      showProgress: true,
      enableZoomPan: true,
      autoplayAudio: false,
      backgroundImage: '',
      backgroundAltText: 'Diagram of a project control room wall with charter, schedule, risk and status boards',
      backgroundDecorative: false,
      backgroundFit: 'contain',
      backgroundFocalX: 50,
      backgroundFocalY: 50,
      items: [
        {
          title: 'Milestone Schedule',
          content: 'A one-page view of major milestones and their status, used to see at a glance whether the plan is still achievable.',
          x: '22',
          y: '35',
          markerType: 'icon',
          iconName: 'info',
          audioUrl: '',
          audioTranscript: ''
        },
        {
          title: 'Risk Register',
          content: 'Lists each risk with its owner, likelihood, impact and agreed response. Reviewed at every status meeting.',
          x: '48',
          y: '32',
          markerType: 'icon',
          iconName: 'alert',
          audioUrl: '',
          audioTranscript: ''
        },
        {
          title: 'Status Dashboard',
          content: 'Shows overall health for schedule, budget and scope, with the decisions the sponsor needs to make this week.',
          x: '75',
          y: '28',
          markerType: 'icon',
          iconName: 'star',
          audioUrl: '',
          audioTranscript: ''
        },
        {
          title: 'Change Log',
          content: 'Records each requested change, the impact assessment and the decision, so the baseline always has an audit trail.',
          x: '82',
          y: '70',
          markerType: 'icon',
          iconName: 'shield',
          audioUrl: '',
          audioTranscript: ''
        }
      ]
    }
  },
  {
    id: 'hs-stakeholder-map',
    componentId: 'hotspots',
    title: 'Stakeholder Engagement Map',
    name: 'Stakeholder Engagement Map',
    description: 'Explore the four quadrants of a power and interest grid and how to engage each group, with modal callouts.',
    domain: 'Stakeholder Management',
    config: {
      title: 'Stakeholder Power and Interest Grid',
      content: 'Select each quadrant to see how to engage the stakeholders who sit in it.',
      calloutMode: 'modal',
      showProgress: true,
      enableZoomPan: true,
      autoplayAudio: false,
      backgroundImage: '',
      backgroundAltText: 'A four-quadrant grid plotting stakeholder power against interest',
      backgroundDecorative: false,
      backgroundFit: 'contain',
      backgroundFocalX: 50,
      backgroundFocalY: 50,
      items: [
        {
          title: 'High Power, High Interest: Manage Closely',
          content: 'Sponsors and key decision makers. Involve them in decisions, share detail often and check that expectations match the plan.',
          x: '72',
          y: '25',
          markerType: 'icon',
          iconName: 'star',
          audioUrl: '',
          audioTranscript: ''
        },
        {
          title: 'High Power, Low Interest: Keep Satisfied',
          content: 'Senior leaders outside the project who could still affect it. Give concise updates and never surprise them.',
          x: '28',
          y: '25',
          markerType: 'icon',
          iconName: 'shield',
          audioUrl: '',
          audioTranscript: ''
        },
        {
          title: 'Low Power, High Interest: Keep Informed',
          content: 'End users and team members affected by the result. Keep them informed and invite feedback, as they often spot problems early.',
          x: '72',
          y: '72',
          markerType: 'icon',
          iconName: 'info',
          audioUrl: '',
          audioTranscript: ''
        }
      ]
    }
  },

  // 5. Quick Link Buttons (button-list)
  {
    id: 'bl-project-toolkit',
    componentId: 'button-list',
    title: 'Project Manager Toolkit',
    name: 'Project Manager Toolkit',
    description: 'A launchpad of the templates and guides a new project manager needs in the first week.',
    domain: 'Project Support',
    config: {
      items: [
        { title: 'Project Charter Template', content: 'https://example.com/pm-toolkit/project-charter' },
        { title: 'Risk Register Template', content: 'https://example.com/pm-toolkit/risk-register' },
        { title: 'Weekly Status Report Template', content: 'https://example.com/pm-toolkit/status-report' },
        { title: 'Change Request Form', content: 'https://example.com/pm-toolkit/change-request' }
      ]
    }
  },

  // 6. Secondary Menu Drawer / Reference Explorer (menu-list)
  {
    id: 'ml-meeting-handbook',
    componentId: 'menu-list',
    title: 'Project Meeting Handbook',
    name: 'Project Meeting Handbook',
    description: 'A quick-reference guide to running the four meetings most projects depend on.',
    domain: 'Project Communication',
    config: {
      items: [
        {
          title: 'Section 01: Kickoff Meeting',
          content: 'Held once, at the start. Confirm purpose, roles, scope, milestones and working agreements. Everyone leaves knowing what they own and when it is due.'
        },
        {
          title: 'Section 02: Weekly Status Meeting',
          content: 'Keep it to 30 minutes. Review progress against milestones, the top risks and issues, and any decisions needed. Publish the notes the same day.'
        },
        {
          title: 'Section 03: Change Control Board',
          content: 'Meets on a fixed cadence to review change requests. Each request is assessed for impact on scope, schedule, cost and risk before it is approved, deferred or rejected.'
        },
        {
          title: 'Section 04: Lessons Learned Session',
          content: 'Held at closing and at major milestones. Ask what went well, what did not and what to change, and file the results where the next project team will find them.'
        }
      ]
    }
  },

  // 7. Multiple Choice Knowledge Check (multiple-choice)
  {
    id: 'mc-scope-change',
    componentId: 'multiple-choice',
    title: 'Handling an Informal Scope Request',
    name: 'Handling an Informal Scope Request',
    description: 'Test how a project manager should respond when a stakeholder asks for extra work in a corridor conversation.',
    domain: 'Scope Management',
    config: {
      mcConfidenceMode: true,
      mcRequireConfidence: true,
      mcConfidenceLowLabel: 'Uncertain',
      mcConfidenceMidLabel: 'Somewhat Confident',
      mcConfidenceHighLabel: 'Highly Confident',
      mcMaxAttempts: 2,
      mcShowCorrectAfterFinal: true,
      mcHintText: 'Think about what protects the baseline and still treats the stakeholder as a partner.',
      mcFinalExplanation: 'Correct approach: acknowledge the request, capture it in a change request and assess its impact on scope, schedule, cost and risk, then take it to the agreed change process for a decision.',
      mcAllowReset: true,
      mcShowResultSummary: true,
      mcSubmitButtonText: 'Check My Answer',
      items: [
        {
          label: 'Agree right away and ask the team to fit the work in, since the stakeholder is senior.',
          content: 'Incorrect. Absorbing unassessed work quietly is how scope creep starts, and the team has no chance to flag the impact.',
          correct: false
        },
        {
          label: 'Thank them, record the request as a change request, assess its impact and take it through change control.',
          content: 'Correct! This keeps the stakeholder involved while protecting the baseline and giving the sponsor the information to decide.',
          correct: true
        },
        {
          label: 'Say no immediately because the scope has already been approved.',
          content: 'Incorrect. A blunt refusal damages the relationship, and some changes are valuable enough to approve once their impact is known.',
          correct: false
        },
        {
          label: 'Ignore the request and hope it is forgotten.',
          content: 'Incorrect. Unresolved requests resurface later, usually at a worse moment. Every request deserves a visible response.',
          correct: false
        }
      ]
    }
  },

  // 8. Multiple Select Knowledge Check (multiple-select)
  {
    id: 'ms-risk-response',
    componentId: 'multiple-select',
    title: 'Effective Risk Management Practices',
    name: 'Effective Risk Management Practices',
    description: 'Select every practice that belongs in a healthy risk management routine.',
    domain: 'Risk Management',
    config: {
      items: [
        {
          label: 'Assign each risk to a named owner who is responsible for the response.',
          content: 'Correct. A risk without an owner is unlikely to get a response.',
          correct: true
        },
        {
          label: 'Record risks once at kickoff and only revisit them at project close.',
          content: 'Incorrect. Risks change as the project moves, so the register needs regular review.',
          correct: false
        },
        {
          label: 'Rate each risk for likelihood and impact so effort goes to the biggest threats.',
          content: 'Correct. Simple scoring helps the team focus on what matters most.',
          correct: true
        },
        {
          label: 'Agree a response and a trigger for each high-priority risk.',
          content: 'Correct. A response plan and a clear trigger let the team act quickly when the risk occurs.',
          correct: true
        }
      ]
    }
  },

  // 9. Sorting Activity (sorting-activity)
  {
    id: 'sa-agile-or-predictive',
    componentId: 'sorting-activity',
    title: 'Sort the Practice: Predictive, Agile or Both',
    name: 'Sort the Practice: Predictive, Agile or Both',
    description: 'Sort project practices into the approach where they are most typical.',
    domain: 'Ways of Working',
    config: {
      items: [
        {
          title: 'Baselined Work Breakdown Structure',
          content: 'A full decomposition of scope approved before execution starts.',
          category: 'Predictive'
        },
        {
          title: 'Daily Stand-up',
          content: 'A short daily meeting where the team shares progress, plans and blockers.',
          category: 'Agile'
        },
        {
          title: 'Risk Register',
          content: 'A living list of risks with owners, responses and triggers.',
          category: 'Both'
        },
        {
          title: 'Sprint Backlog Review',
          content: 'The team and product owner refine and reprioritise upcoming work each iteration.',
          category: 'Agile'
        }
      ]
    }
  },

  // 10. Fill in the Blank (fill-blank)
  {
    id: 'fb-project-terminology',
    componentId: 'fill-blank',
    title: 'Project Terminology Check',
    name: 'Project Terminology Check',
    description: 'Reinforce the precise vocabulary of project planning by completing key statements.',
    domain: 'Project Fundamentals',
    config: {
      items: [
        {
          title: 'The [blank] path is the longest sequence of dependent activities and determines the earliest finish date.',
          content: 'critical'
        },
        {
          title: 'A project [blank] is the document that formally authorises the project and names the project manager.',
          content: 'charter'
        },
        {
          title: 'Uncontrolled growth in scope without matching changes to time or cost is called scope [blank].',
          content: 'creep'
        },
        {
          title: 'Every project is limited by three constraints: [blank], [blank] and [blank].',
          content: 'scope\ntime, schedule\ncost, budget'
        }
      ]
    }
  },

  // 11. Guided Vertical Timeline (vertical-timeline)
  {
    id: 'vt-project-lifecycle',
    componentId: 'vertical-timeline',
    title: 'A Project from Charter to Closure',
    name: 'A Project from Charter to Closure',
    description: 'Walk through the main stages of a typical project, from the first idea to the lessons learned.',
    domain: 'Project Lifecycle',
    config: {
      timelineCategoriesEnabled: true,
      timelineCompareMode: false,
      timelineCollapsibleDetails: true,
      timelineShowProgress: true,
      timelineChronologicalReveal: true,
      timelineAllowReset: true,
      items: [
        {
          title: 'Week 0: Business Case Approved',
          content: 'The sponsor approves the business case and funds the initiation phase. The project manager is named.',
          category: 'Initiate'
        },
        {
          title: 'Week 2: Charter Signed',
          content: 'Objectives, high-level scope, key stakeholders and success measures are agreed and documented in the charter.',
          category: 'Initiate'
        },
        {
          title: 'Week 6: Baseline Plan Approved',
          content: 'The scope, schedule, budget and risk plans are reviewed with the sponsor and baselined, so progress can be measured.',
          category: 'Plan'
        },
        {
          title: 'Week 20: Deliverables Accepted',
          content: 'The customer reviews the deliverables against the agreed acceptance criteria and formally accepts them.',
          category: 'Deliver'
        },
        {
          title: 'Week 22: Project Closed',
          content: 'Contracts are closed, the team is released and a lessons learned session records what to repeat and what to change.',
          category: 'Close'
        }
      ]
    }
  },

  // 12. Horizontal Timeline / Journey Map (horizontal-timeline)
  {
    id: 'ht-iteration-cycle',
    componentId: 'horizontal-timeline',
    title: 'The Two-Week Iteration Cycle',
    name: 'The Two-Week Iteration Cycle',
    description: 'Explore the sequence of events in a typical two-week agile iteration.',
    domain: 'Agile Delivery',
    config: {
      items: [
        {
          title: '1. Iteration Planning',
          content: 'The team and product owner agree the goal for the iteration and choose the backlog items the team can complete.',
          markerLabel: '01'
        },
        {
          title: '2. Daily Stand-ups',
          content: 'A 15-minute meeting each day where the team shares progress, plans and anything blocking them.',
          markerLabel: '02'
        },
        {
          title: '3. Iteration Review',
          content: 'The team demonstrates the completed work to stakeholders and collects feedback that shapes the backlog.',
          markerLabel: '03'
        },
        {
          title: '4. Retrospective',
          content: 'The team reflects on how it worked, chooses one or two improvements and applies them in the next iteration.',
          markerLabel: '04'
        }
      ]
    }
  },

  // 13. Step-by-Step Process Flow (process-flow)
  {
    id: 'pf-change-request',
    componentId: 'process-flow',
    title: 'Change Request Procedure',
    name: 'Change Request Procedure',
    description: 'A gated, step-by-step procedure for handling a change request from submission to decision.',
    domain: 'Change Control',
    config: {
      items: [
        {
          title: 'Submit the Change Request',
          content: 'The requester describes the change, the reason for it and the outcome they expect using the change request form.',
          durationMinutes: 10
        },
        {
          title: 'Log and Triage',
          content: 'The project manager logs the request in the change log, checks it is complete and assigns someone to assess it.',
          durationMinutes: 5
        },
        {
          title: 'Assess the Impact',
          content: 'The team estimates the effect on scope, schedule, cost, quality and risk, and identifies any alternatives.',
          durationMinutes: 30
        },
        {
          title: 'Decide',
          content: 'The change board approves, defers or rejects the request, recording the reasons and any conditions.',
          durationMinutes: 15
        },
        {
          title: 'Update the Baseline and Communicate',
          content: 'For approved changes, update the plan and baseline, tell the team and stakeholders, and close the entry in the log.',
          durationMinutes: 15
        }
      ]
    }
  },

  // 14. Branching Scenario Card (scenario)
  {
    id: 'sc-late-milestone',
    componentId: 'scenario',
    title: 'A Key Milestone Is at Risk',
    name: 'A Key Milestone Is at Risk',
    description: 'Practise a difficult sponsor conversation when a major milestone will probably be missed.',
    domain: 'Stakeholder Management',
    config: {
      items: [
        {
          title: 'Your sponsor stops you in the corridor and asks whether the milestone due in three weeks is still on track. You know a critical supplier is running two weeks late. What do you say?',
          content: 'Scenario Prompt'
        },
        {
          title: 'Say everything is fine and hope the supplier catches up.',
          content: 'Incorrect approach: Hiding a known risk removes the sponsor’s chance to help, and trust suffers badly when the delay becomes visible.'
        },
        {
          title: 'Explain the delay honestly, share the options you have considered and ask for the decision you need.',
          content: 'Role model response! Early, factual and solution-focused updates let the sponsor act while options remain open.'
        },
        {
          title: 'Tell the sponsor it is the supplier’s fault and that nothing can be done.',
          content: 'Incorrect approach: Blaming without offering options leaves the sponsor with a problem and no way forward.'
        }
      ]
    }
  },

  // 15. Modern Profile Grid (profile-cards)
  {
    id: 'pc-project-team-roster',
    componentId: 'profile-cards',
    title: 'Meet the Project Team',
    name: 'Meet the Project Team',
    description: 'Introduce the key roles on a project and what each is accountable for.',
    domain: 'Project Roles',
    config: {
      items: [
        {
          title: 'Elena Rostova',
          content: 'Project Sponsor • Owns the business case, secures funding and removes obstacles that the project team cannot clear on its own.',
          imageCrop: 'circle'
        },
        {
          title: 'Marcus Vance',
          content: 'Project Manager • Plans and coordinates the work, manages risks and changes, and reports progress to the sponsor.',
          imageCrop: 'circle'
        },
        {
          title: 'Dr. Priya Patel',
          content: 'Business Analyst • Gathers and clarifies requirements, and makes sure what is delivered meets the need behind them.',
          imageCrop: 'circle'
        }
      ]
    }
  },

  // 16. Multi-Column Info Grid (info-grid)
  {
    id: 'ig-project-success-pillars',
    componentId: 'info-grid',
    title: 'Three Pillars of Project Success',
    name: 'Three Pillars of Project Success',
    description: 'Core principles that help projects deliver value: clear purpose, engaged people and steady learning.',
    domain: 'Project Principles',
    config: {
      items: [
        {
          title: 'Clear Purpose',
          content: 'Everyone can explain why the project exists and how success will be measured, so trade-offs are made against the same goal.',
          accentColor: '#00799E'
        },
        {
          title: 'Engaged People',
          content: 'Stakeholders and team members are involved early, know their roles and feel safe raising concerns.',
          accentColor: '#00799E'
        },
        {
          title: 'Steady Learning',
          content: 'The team reviews its work regularly and applies what it learns before the project ends, not only afterwards.',
          accentColor: '#0890BA'
        }
      ]
    }
  },

  // 17. Comparison Matrix / Product Matrix Cards (pricing-comparison)
  {
    id: 'pc-training-options',
    componentId: 'pricing-comparison',
    title: 'Choosing a Learning Format',
    name: 'Choosing a Learning Format',
    description: 'Compare self-paced, instructor-led and blended formats for a project management course.',
    domain: 'Learning Options',
    config: {
      items: [
        {
          title: 'Self-Paced eLearning',
          content: 'Learn Anytime • About 8 Hours • Knowledge Checks Included • Certificate of Completion • Lowest Cost',
          highlighted: false,
          actionUrl: 'https://example.com/learning/self-paced'
        },
        {
          title: 'Blended Learning',
          content: 'Self-Paced Modules Plus Live Sessions • About 16 Hours • Facilitated Practice Scenarios • Peer Discussion • Coaching Support',
          highlighted: true,
          actionUrl: 'https://example.com/learning/blended'
        },
        {
          title: 'Instructor-Led Workshop',
          content: 'Two Days Live • Small Cohort • Hands-On Case Studies • Instructor Feedback on Your Own Project • Highest Interaction',
          highlighted: false,
          actionUrl: 'https://example.com/learning/workshop'
        }
      ]
    }
  },

  // 18. Learning Audio Player (audio-player)
  {
    id: 'ap-leading-through-change',
    componentId: 'audio-player',
    title: 'Leadership Insights: Leading Teams Through Change',
    name: 'Leadership Insights: Leading Teams Through Change',
    description: 'Audio conversation about helping project teams adapt when priorities shift.',
    domain: 'Leadership & Culture',
    config: {
      presentationMode: 'podcast',
      chapters: '0:00 | Introduction | Why change is the norm on projects\n0:45 | Bringing People Along | Explaining the why before the what\n1:30 | Keeping Momentum | Small wins and regular check-ins',
      transcriptSegments: '0:00 | Host | Welcome to Leadership Insights. Today we talk about leading teams through change.\n0:45 | Guest | People accept change more readily when they understand why it is happening and what it means for them.\n1:30 | Guest | Small, visible wins and regular check-ins keep the team moving while the larger change settles in.',
      progressPersistence: true,
      takeaways: 'Explain the reason for a change before describing the plan.\nInvite the team to shape how the change is implemented.\nCelebrate small wins to sustain momentum.',
      takeawaysVisibility: 'always',
      items: [
        {
          title: 'Episode 12: Leading Through Change',
          seriesLabel: 'LEADERSHIP SERIES',
          description: 'A conversation on helping project teams adapt when priorities and plans shift.',
          content: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          transcript: 'Full episode transcript discussing how to explain change, involve the team and keep momentum during a period of uncertainty.'
        }
      ]
    }
  },

  // 19. Learning Video Player (video-frame)
  {
    id: 'vf-status-meeting-briefing',
    componentId: 'video-frame',
    title: 'A Well-Run Weekly Status Meeting',
    name: 'A Well-Run Weekly Status Meeting',
    description: 'Video overview showing how a project team runs a focused, decision-oriented status meeting.',
    domain: 'Project Communication',
    config: {
      chapters: '0:00 | Meeting Purpose | Why the team meets each week\n0:10 | Reviewing Progress | Milestones, risks and issues\n0:20 | Decisions and Actions | Who does what by when',
      transcriptSegments: '0:00 | Narrator | A good status meeting is short, prepared and focused on decisions rather than on reading out updates.\n0:10 | Project Manager | We review progress against milestones, then spend most of our time on the top risks and issues.\n0:20 | Project Manager | Before we finish, we confirm every action has an owner and a date.',
      progressPersistence: true,
      takeaways: 'Send the status summary ahead so the meeting can focus on decisions.\nSpend most of the time on the biggest risks and issues.\nEnd with clear owners and dates for every action.',
      takeawaysVisibility: 'always',
      items: [
        {
          title: 'Inside a Weekly Status Meeting',
          content: 'https://www.w3schools.com/html/mov_bbb.mp4',
          transcript: 'Video briefing showing a project team running a focused weekly status meeting and agreeing clear actions.',
          audioDescription: 'Video shows a project team seated around a table reviewing a milestone chart and risk list on a wall display.'
        }
      ]
    }
  },

  // 20. Grid Photo Gallery (image-gallery)
  {
    id: 'ig-team-collaboration-gallery',
    componentId: 'image-gallery',
    title: 'Project Collaboration in Practice Gallery',
    name: 'Project Collaboration in Practice Gallery',
    description: 'Visual reference gallery showing effective team collaboration during planning, review and delivery.',
    domain: 'Project Teams',
    config: {
      items: [
        {
          title: 'Planning Session',
          caption: 'A team maps out milestones and dependencies together on a shared wall.',
          content: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
          altText: 'A team gathered around a table planning work with sticky notes and laptops'
        },
        {
          title: 'Team Working Session',
          caption: 'Co-located working sessions surface questions early and speed up decisions.',
          content: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
          altText: 'Colleagues collaborating around a table during a working session'
        },
        {
          title: 'Stakeholder Review',
          caption: 'A review meeting gives stakeholders a chance to give feedback on the work so far.',
          content: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800',
          altText: 'People seated at a conference table during a review meeting'
        }
      ]
    }
  },

  // 21. Confidence Matrix (confidence-matrix) — Scenario A
  {
    id: 'cm-risk-management-readiness',
    componentId: 'confidence-matrix',
    title: 'Risk Management Readiness',
    name: 'Risk Management Readiness',
    description: 'Self-assessment measuring readiness to identify, assess and respond to project risks.',
    domain: 'Risk Management',
    config: {
      blockTitle: 'RISK READINESS CHECK',
      blockHeadline: 'Project Risk Management Self-Assessment',
      blockDesc: 'Rate your confidence across the key risk management activities. Your results highlight where to focus your development.',
      scaleLabels: [
        'Novice: Need Guidance',
        'Capable: With Checklist',
        'Proficient: Autonomous',
        'Expert: Can Coach Others'
      ],
      items: [
        {
          id: 'cm-item-1',
          domain: 'Identification',
          skill: 'Identify risks from multiple sources',
          description: 'Use workshops, lessons learned and stakeholder interviews to find risks that a single perspective would miss.',
          rating: 2
        },
        {
          id: 'cm-item-2',
          domain: 'Identification',
          skill: 'Write a clear risk statement',
          description: 'Describe the cause, the uncertain event and the effect so the team can respond precisely.',
          rating: 1
        },
        {
          id: 'cm-item-3',
          domain: 'Analysis',
          skill: 'Score likelihood and impact consistently',
          description: 'Apply an agreed scale so risks can be compared and prioritised fairly.',
          rating: 3
        },
        {
          id: 'cm-item-4',
          domain: 'Response',
          skill: 'Choose a proportionate response',
          description: 'Decide whether to avoid, mitigate, transfer or accept a risk, and plan the actions and triggers.',
          rating: 2
        },
        {
          id: 'cm-item-5',
          domain: 'Communication',
          skill: 'Escalate a risk promptly',
          description: 'Bring significant risks to the sponsor early, with options, and record the outcome in the register.',
          rating: 3
        }
      ]
    }
  },

  // 22. Confidence Matrix (confidence-matrix) — Scenario B
  {
    id: 'cm-stakeholder-conversations',
    componentId: 'confidence-matrix',
    title: 'Difficult Stakeholder Conversations',
    name: 'Difficult Stakeholder Conversations',
    description: 'Diagnostic assessment for project managers handling tense stakeholder discussions.',
    domain: 'Stakeholder Management',
    config: {
      blockTitle: 'STAKEHOLDER SKILLS',
      blockHeadline: 'Difficult Conversations Assessment',
      blockDesc: 'Evaluate your ability to lead challenging conversations, rebuild trust and agree next steps when a project is under pressure.',
      scaleLabels: [
        'Developing',
        'Competent',
        'Advanced',
        'Role Model'
      ],
      items: [
        {
          id: 'cm-esc-1',
          domain: 'Empathy & Rapport',
          skill: 'Acknowledge frustration without becoming defensive',
          description: 'Show that you understand the impact on the stakeholder while staying calm and factual.',
          rating: 3
        },
        {
          id: 'cm-esc-2',
          domain: 'Facts & Analysis',
          skill: 'Separate what is known from what is assumed',
          description: 'Present confirmed facts, name the open questions and say when you will know more.',
          rating: 2
        },
        {
          id: 'cm-esc-3',
          domain: 'Resolution Planning',
          skill: 'Offer realistic options with trade-offs',
          description: 'Lay out choices and their effect on scope, schedule and cost rather than making vague promises.',
          rating: 3
        },
        {
          id: 'cm-esc-4',
          domain: 'Follow-up',
          skill: 'Close the loop after the conversation',
          description: 'Confirm decisions in writing and follow up on every commitment you made.',
          rating: 2
        }
      ]
    }
  },

  // 23. Interactive Gauge (dial-gauge) — Scenario A
  {
    id: 'dg-schedule-performance',
    componentId: 'dial-gauge',
    title: 'Schedule Performance Index',
    name: 'Schedule Performance Index',
    description: 'Interactive metric gauge showing how a project is tracking against its schedule baseline.',
    domain: 'Performance Management',
    config: {
      blockTitle: 'KEY PERFORMANCE INDICATOR',
      blockHeadline: 'Schedule Performance Explorer',
      blockDesc: 'Drag the gauge or use the arrow keys to see what each schedule performance level means and what action it calls for.',
      gaugeValue: 92,
      gaugeMin: 50,
      gaugeMax: 110,
      unitLabel: '% of plan',
      zones: [
        { min: 50, max: 69, label: 'Seriously Behind', colorTone: 'danger', feedback: 'Escalate to the sponsor now. Re-plan the remaining work and decide whether to add resource, reduce scope or move the date.' },
        { min: 70, max: 89, label: 'Behind Plan', colorTone: 'warning', feedback: 'Find the cause of the slippage and agree a recovery plan with the team before the gap widens.' },
        { min: 90, max: 100, label: 'On Track', colorTone: 'success', feedback: 'Progress matches the baseline. Keep reviewing risks so the plan stays healthy.' },
        { min: 101, max: 110, label: 'Ahead of Plan', colorTone: 'primary', feedback: 'Check that quality has not been traded for speed, and consider whether the early finish creates opportunities.' }
      ]
    }
  },

  // 24. Interactive Gauge (dial-gauge) — Scenario B
  {
    id: 'dg-budget-utilisation',
    componentId: 'dial-gauge',
    title: 'Budget Utilisation Monitor',
    name: 'Budget Utilisation Monitor',
    description: 'Interactive tracker showing what different levels of budget consumed mean at the halfway point of a project.',
    domain: 'Cost Management',
    config: {
      blockTitle: 'PROJECT FINANCE',
      blockHeadline: 'Budget Utilisation at Project Midpoint',
      blockDesc: 'Adjust the gauge to see what each level of budget consumed means when the project is half way through its schedule.',
      gaugeValue: 48,
      gaugeMin: 0,
      gaugeMax: 100,
      unitLabel: '% budget used',
      zones: [
        { min: 0, max: 39, label: 'Underspent', colorTone: 'warning', feedback: 'Check that work is not being deferred or that costs are not still to be invoiced.' },
        { min: 40, max: 55, label: 'In Line with Plan', colorTone: 'success', feedback: 'Spend matches progress. Continue monthly forecasting.' },
        { min: 56, max: 70, label: 'Overspend Risk', colorTone: 'warning', feedback: 'Review the forecast to completion and identify where costs are growing.' },
        { min: 71, max: 100, label: 'Significant Overspend', colorTone: 'danger', feedback: 'Escalate to the sponsor with a revised forecast and options to bring the cost back under control.' }
      ]
    }
  },

  // 25. Card Carousel (card-carousel)
  {
    id: 'cc-coaching-framework',
    componentId: 'card-carousel',
    title: 'The 5-Step Team Coaching Framework',
    name: 'The 5-Step Team Coaching Framework',
    description: 'Structured leadership model for running impactful one-to-one development conversations.',
    domain: 'Leadership & Development',
    config: {
      blockTitle: 'LEADERSHIP TOOLKIT',
      blockHeadline: 'The 5-Step Continuous Coaching Model',
      blockDesc: 'Move through each phase of the coaching cycle to prepare for meaningful check-ins with your team members.',
      items: [
        {
          title: '1. Connect & Establish Purpose',
          category: 'PHASE 1',
          content: 'Begin with genuine rapport. Frame the conversation as a shared discussion about growth rather than an audit.',
          summary: 'Set psychological safety and agree on the focus.'
        },
        {
          title: '2. Explore Current Reality',
          category: 'PHASE 2',
          content: 'Ask open questions. Encourage the team member to reflect first on recent work and results.',
          summary: 'Uncover obstacles and celebrate what is going well.'
        },
        {
          title: '3. Define the Target Outcome',
          category: 'PHASE 3',
          content: 'Establish what great performance looks like. Agree specific, observable behaviours that make the difference.',
          summary: 'Co-create a shared picture of success.'
        },
        {
          title: '4. Build the Action Plan',
          category: 'PHASE 4',
          content: 'Choose one or two high-leverage actions the team member will practise over the next two weeks, with peer support.',
          summary: 'Commit to concrete, time-bound steps.'
        },
        {
          title: '5. Follow Up & Stay Accountable',
          category: 'PHASE 5',
          content: 'Set the date for the progress review. Reinforce your commitment to removing blockers along the way.',
          summary: 'Lock in the next check-in.'
        }
      ]
    }
  },

  // 26. Policy & Alert Cards (callout-box)
  {
    id: 'cb-information-handling',
    componentId: 'callout-box',
    title: 'Project Information Handling Guidelines',
    name: 'Project Information Handling Guidelines',
    description: 'A compact matrix of the safeguards that apply to project documents and data.',
    domain: 'Governance & Compliance',
    config: {
      blockTitle: 'GOVERNANCE REMINDER',
      blockHeadline: 'Handling Confidential Project Information',
      blockDesc: 'Review the standards below. You must acknowledge understanding before you receive access to project records.',
      layout: 'grid-2',
      requireAcknowledgment: true,
      acknowledgmentText: 'I confirm that I have reviewed the information handling guidance and will protect confidential project information.',
      items: [
        {
          title: 'Share Only What Is Needed',
          tone: 'primary',
          category: 'MANDATORY DIRECTIVE',
          content: 'Give people access to the documents they need for their role, and no more. Remove access when someone leaves the project.'
        },
        {
          title: 'Clear Desk & Screen',
          tone: 'warning',
          category: 'SECURITY REMINDER',
          content: 'Lock your screen when you step away and put printed project documents away or shred them when they are no longer needed.'
        },
        {
          title: 'Use Approved Tools',
          tone: 'info',
          category: 'OPERATIONAL GUIDANCE',
          content: 'Store and share project information only in the collaboration tools approved by your organisation, not in personal accounts.'
        },
        {
          title: 'Report Concerns Quickly',
          tone: 'tip',
          category: 'BEST PRACTICE',
          content: 'If you think confidential information has been shared by mistake, tell the project manager straight away so the impact can be limited.'
        }
      ]
    }
  },

  // 27. Comparison Slider (comparison-slider)
  {
    id: 'cs-status-report-makeover',
    componentId: 'comparison-slider',
    title: 'Status Report Makeover: Task List vs Outcome Summary',
    name: 'Status Report Makeover: Task List vs Outcome Summary',
    description: 'Visual before-and-after comparison of a status report that lists every task with one built around outcomes and decisions.',
    domain: 'Project Communication',
    config: {
      blockTitle: 'COMMUNICATION IN PRACTICE',
      blockHeadline: 'Making Status Reports Useful',
      blockDesc: 'Drag the slider to compare a long task-based status report with a one-page summary of health, risks and decisions.',
      beforeLabel: 'Task-Based Report (Before)',
      afterLabel: 'Outcome-Based Summary (After)',
      beforeDetails: 'Six pages of tasks, no priorities, and the decision the sponsor needs is buried on page five.',
      afterDetails: 'One page with overall health, top three risks, milestone status and the decisions needed this week.'
    }
  },

  // 28. Interactive Video (interactive-video)
  {
    id: 'iv-sponsor-briefing',
    componentId: 'interactive-video',
    title: 'Briefing a Sponsor on a Project Problem',
    name: 'Briefing a Sponsor on a Project Problem',
    description: 'Interactive scenario coaching project managers on delivering clear, honest updates when something has gone wrong.',
    domain: 'Leadership Communication',
    config: {
      blockTitle: 'EXECUTIVE COMMUNICATION',
      blockHeadline: 'Delivering Bad News to a Sponsor',
      blockDesc: 'Watch the briefing simulation. Respond to the checkpoint prompts at key moments to guide the conversation.',
      resumeBehaviour: 'automaticAfterCorrectAnswer',
      completionRule: 'allRequiredInteractionsCompleted',
      items: [
        {
          type: 'information',
          timestamp: 15,
          title: 'Framework: Bottom Line Up Front',
          content: 'When briefing a sponsor about a problem, state the situation and its effect on the project in the first 30 seconds before explaining causes.'
        },
        {
          type: 'multipleChoice',
          timestamp: 45,
          title: 'Checkpoint: Responding When Facts Are Incomplete',
          prompt: 'The sponsor asks for the exact date the delayed deliverable will arrive, but the supplier has not yet confirmed. How do you respond?',
          options: [
            { text: 'Give an optimistic date to reassure the sponsor.', correct: false, feedback: 'Incorrect. An unverified date damages credibility if it is missed.' },
            { text: 'Share what is confirmed, explain what you are doing to find out more and commit to a specific time for the next update.', correct: true, feedback: 'Correct! Transparency plus a committed follow-up builds credibility.' },
            { text: 'Suggest the sponsor contact the supplier directly.', correct: false, feedback: 'Incorrect. Managing the supplier relationship is part of your role.' }
          ]
        }
      ]
    }
  },

  // 29. Confidence Matrix Preset 2: Leadership & Strategic Decision-Making
  {
    id: 'cm-leadership-strategic-execution',
    componentId: 'confidence-matrix',
    title: 'Leadership & Strategic Decision-Making',
    name: 'Leadership & Strategic Decision-Making',
    description: 'Self-assess leadership capabilities across vision setting, psychological safety, change resilience and conflict resolution.',
    domain: 'Leadership Development',
    config: {
      title: 'Leadership & Strategic Execution Matrix',
      content: 'Assess your capability to guide high-performing teams, navigate ambiguity and drive decisive outcomes.',
      showBreakdown: true,
      scaleLabel: 'Leadership Mastery Scale',
      items: [
        {
          title: 'Strategic Clarity',
          category: 'Strategy & Direction',
          content: 'Translate organisational objectives into clear, measurable team goals and roadmaps.'
        },
        {
          title: 'Psychological Safety',
          category: 'Team Culture',
          content: 'Build an environment where team members challenge assumptions, report early mistakes without fear and propose new ideas.'
        },
        {
          title: 'Change Leadership',
          category: 'Organisational Agility',
          content: 'Lead stakeholders through pivots, new ways of working and structural changes with clear communication.'
        },
        {
          title: 'Conflict Resolution',
          category: 'Interpersonal Leadership',
          content: 'Address friction and competing priorities directly, using objective and principle-based mediation.'
        }
      ]
    }
  },

  // 30. Confidence Matrix Preset 3: Responsible AI Use
  {
    id: 'cm-responsible-ai-use',
    componentId: 'confidence-matrix',
    title: 'Responsible Use of Generative AI',
    name: 'Responsible Use of Generative AI',
    description: 'Evaluate readiness to use generative AI tools responsibly across prompting, data boundaries, verification and ethics.',
    domain: 'Artificial Intelligence',
    config: {
      title: 'Generative AI Practitioner Readiness Assessment',
      content: 'Measure your confidence in using generative AI tools responsibly at work while protecting confidential information.',
      showBreakdown: true,
      scaleLabel: 'AI Practitioner Maturity Scale',
      items: [
        {
          title: 'Writing Effective Prompts',
          category: 'AI Skills',
          content: 'Give the tool a clear role, context and format so that its output is useful and easier to check.'
        },
        {
          title: 'Protecting Confidential Data',
          category: 'Security & Privacy',
          content: 'Never enter client, personal or confidential project information into tools your organisation has not approved.'
        },
        {
          title: 'Checking the Output',
          category: 'Quality Assurance',
          content: 'Verify facts, figures and references against authoritative sources before using anything an AI tool produced.'
        },
        {
          title: 'Fairness and Transparency',
          category: 'Ethical Governance',
          content: 'Watch for bias in outputs, be open about where AI was used, and follow your organisation’s AI guidelines.'
        }
      ]
    }
  },

  // 31. Confidence Matrix Preset 4: Team Communication & Meetings
  {
    id: 'cm-team-communication',
    componentId: 'confidence-matrix',
    title: 'Team Communication & Meeting Effectiveness',
    name: 'Team Communication & Meeting Effectiveness',
    description: 'Assess communication skills across meeting facilitation, written updates, decisions and hand-offs.',
    domain: 'Team Communication',
    config: {
      title: 'Team Communication Matrix',
      content: 'Evaluate your confidence in keeping a team informed, aligned and moving during everyday project work.',
      showBreakdown: true,
      scaleLabel: 'Communication Capability Scale',
      items: [
        {
          title: 'Facilitating Meetings',
          category: 'Meetings',
          content: 'Set a clear purpose, keep to time, include quieter voices and finish with owners and dates.'
        },
        {
          title: 'Writing Clear Updates',
          category: 'Written Communication',
          content: 'Lead with the headline, keep it short and make any decision or action needed obvious.'
        },
        {
          title: 'Recording Decisions',
          category: 'Governance',
          content: 'Capture what was decided, by whom and why, and share it where the team can find it.'
        },
        {
          title: 'Handing Over Work',
          category: 'Collaboration',
          content: 'Give the next person the context, status and open questions they need without gaps.'
        }
      ]
    }
  },

  // 32. Interactive Gauge Preset 2: Project Risk Exposure
  {
    id: 'dg-risk-exposure',
    componentId: 'dial-gauge',
    title: 'Project Risk Exposure Score',
    name: 'Project Risk Exposure Score',
    description: 'Interactive risk dial showing how a project’s overall exposure score should drive management attention.',
    domain: 'Risk Management',
    config: {
      title: 'Project Risk Exposure Score',
      content: 'Select a risk level or drag the needle to review the response and reporting expected at each level.',
      unit: 'Risk Score',
      minValue: 0,
      maxValue: 100,
      initialValue: 35,
      step: 5,
      items: [
        {
          title: 'Zone 1: Low Exposure (below 25)',
          rangeMin: 0,
          rangeMax: 25,
          badgeLabel: 'Low Exposure',
          badgeTone: 'neutral',
          content: '<strong>Status: Well controlled</strong><br>Risks are known, owned and being managed. Review the register at the normal cadence.'
        },
        {
          title: 'Zone 2: Moderate Exposure (26-55)',
          rangeMin: 26,
          rangeMax: 55,
          badgeLabel: 'Watch Closely',
          badgeTone: 'info',
          content: '<strong>Status: Some risks need attention</strong><br>Review the top risks weekly and confirm that response actions are on track.'
        },
        {
          title: 'Zone 3: High Exposure (56-80)',
          rangeMin: 56,
          rangeMax: 80,
          badgeLabel: 'High Risk Warning',
          badgeTone: 'warning',
          content: '<strong>Status: Multiple serious risks</strong><br>Brief the sponsor, review the response plans and consider whether contingency funds or time need to be released.'
        },
        {
          title: 'Zone 4: Critical Exposure (81-100)',
          rangeMin: 81,
          rangeMax: 100,
          badgeLabel: 'Critical',
          badgeTone: 'danger',
          content: '<strong>Status: Project objectives at risk</strong><br>Escalate immediately, convene the steering group and decide whether to re-plan, change scope or pause.'
        }
      ]
    }
  },

  // 33. Interactive Gauge Preset 3: Project Management Maturity
  {
    id: 'dg-pm-maturity',
    componentId: 'dial-gauge',
    title: 'Project Management Maturity Model',
    name: 'Project Management Maturity Model',
    description: 'Assess how an organisation’s project practices progress from ad hoc (Level 1) to continuously improving (Level 5).',
    domain: 'Organisational Maturity',
    config: {
      title: 'Project Management Maturity Model',
      content: 'Explore what each maturity level looks like in planning, governance and learning.',
      unit: 'Level',
      minValue: 1,
      maxValue: 5,
      initialValue: 3,
      step: 1,
      items: [
        {
          title: 'Level 1: Ad Hoc',
          rangeMin: 1,
          rangeMax: 1,
          badgeLabel: 'Ad Hoc',
          badgeTone: 'neutral',
          content: '<strong>Practice: Depends on individuals</strong><br>Projects succeed through personal effort. There is no common method, and lessons are rarely captured.'
        },
        {
          title: 'Level 2: Repeatable',
          rangeMin: 2,
          rangeMax: 2,
          badgeLabel: 'Repeatable',
          badgeTone: 'info',
          content: '<strong>Practice: Basic templates in use</strong><br>Teams use common templates for plans and status, though the way they use them still varies.'
        },
        {
          title: 'Level 3: Defined',
          rangeMin: 3,
          rangeMax: 3,
          badgeLabel: 'Defined',
          badgeTone: 'primary',
          content: '<strong>Practice: Standard approach</strong><br>The organisation has a defined method, clear governance and trained project managers who tailor it to each project.'
        },
        {
          title: 'Level 4: Managed',
          rangeMin: 4,
          rangeMax: 4,
          badgeLabel: 'Managed',
          badgeTone: 'primary',
          content: '<strong>Practice: Measured performance</strong><br>Projects are tracked with consistent metrics, and portfolio decisions use the data.'
        },
        {
          title: 'Level 5: Optimising',
          rangeMin: 5,
          rangeMax: 5,
          badgeLabel: 'Optimising',
          badgeTone: 'success',
          content: '<strong>Practice: Continuous improvement</strong><br>Lessons flow back into the method, and teams routinely test and adopt better ways of working.'
        }
      ]
    }
  },

  // 34. Interactive Video Preset 2: Running a Retrospective
  {
    id: 'iv-running-a-retrospective',
    componentId: 'interactive-video',
    title: 'Running a Team Retrospective',
    name: 'Running a Team Retrospective',
    description: 'Video walkthrough of a facilitated retrospective with checkpoints on setting the tone, gathering input and agreeing actions.',
    domain: 'Agile Delivery',
    config: {
      blockTitle: 'TEAM LEARNING',
      blockHeadline: 'Facilitating a Retrospective',
      blockDesc: 'Watch the facilitator run the session. Review the callouts and answer the checkpoint to test your understanding.',
      resumeBehaviour: 'manual',
      completionRule: 'allRequiredInteractionsCompleted',
      items: [
        {
          type: 'information',
          timestamp: 15,
          title: 'Set the Tone',
          content: 'Open by stating the purpose and the ground rules: focus on the work and the process, not on blaming individuals.'
        },
        {
          type: 'information',
          timestamp: 45,
          title: 'Gather Input from Everyone',
          content: 'Ask each person to write down what went well and what to improve before anyone speaks, so louder voices do not dominate.'
        },
        {
          type: 'multipleChoice',
          timestamp: 75,
          title: 'Checkpoint: Agreeing Actions',
          prompt: 'The team has raised twelve improvement ideas. What is the best next step?',
          options: [
            { text: 'Commit to all twelve so that nothing is lost.', correct: false, feedback: 'Incorrect. Too many actions rarely get done, and the team loses trust in the process.' },
            { text: 'Vote on the top one or two, give each an owner and a date, and review them at the next retrospective.', correct: true, feedback: 'Correct! A small number of owned actions leads to real improvement.' },
            { text: 'Have the project manager pick whichever ideas they prefer.', correct: false, feedback: 'Incorrect. The team is more likely to act on improvements it chose itself.' }
          ]
        }
      ]
    }
  },

  // 35. Comparison Matrix Preset 2: Waterfall vs Agile
  {
    id: 'pm-predictive-vs-agile',
    componentId: 'pricing-comparison',
    title: 'Predictive vs Agile Delivery at a Glance',
    name: 'Predictive vs Agile Delivery at a Glance',
    description: 'Comparison matrix contrasting how predictive and agile approaches handle requirements, change and feedback.',
    domain: 'Ways of Working',
    config: {
      blockTitle: 'APPROACH COMPARISON',
      blockHeadline: 'Predictive vs Agile Delivery',
      blockDesc: 'Compare how each approach handles planning, change and stakeholder feedback.',
      items: [
        {
          title: 'Predictive Delivery',
          planName: 'Plan-Driven',
          price: 'Fixed Scope',
          priceSub: 'Detailed Up-Front Plan',
          isPopular: false,
          badgeText: 'Stable Requirements',
          features: [
            { text: 'Scope, schedule and cost baselined early', included: true },
            { text: 'Formal change control', included: true },
            { text: 'Strong traceability for regulated work', included: true },
            { text: 'Working results shown every few weeks', included: false },
            { text: 'Backlog reprioritised each iteration', included: false },
            { text: 'Easy to absorb late changes', included: false }
          ],
          buttonText: 'Review Predictive Practices'
        },
        {
          title: 'Agile Delivery',
          planName: 'Feedback-Driven',
          price: 'Flexible Scope',
          priceSub: 'Iterative Plan',
          isPopular: true,
          badgeText: 'Evolving Requirements',
          features: [
            { text: 'Scope, schedule and cost baselined early', included: false },
            { text: 'Formal change control', included: false },
            { text: 'Strong traceability for regulated work', included: false },
            { text: 'Working results shown every few weeks', included: true },
            { text: 'Backlog reprioritised each iteration', included: true },
            { text: 'Easy to absorb late changes', included: true }
          ],
          buttonText: 'Review Agile Practices'
        }
      ]
    }
  },

  // 36. Learning Audio Player Preset 2: Benefits Realisation
  {
    id: 'ap-benefits-realisation',
    componentId: 'audio-player',
    title: 'Briefing: Delivering Benefits, Not Just Outputs',
    name: 'Briefing: Delivering Benefits, Not Just Outputs',
    description: 'Chaptered audio overview of how projects link what they deliver to the value the organisation expects.',
    domain: 'Value Delivery',
    config: {
      audioTitle: 'Delivering Benefits, Not Just Outputs',
      audioSubtitle: 'A Briefing for Project Leaders',
      audioDescription: 'Listen to this chaptered briefing to understand how to connect project deliverables to the benefits the organisation expects, and how to track them after the project ends.',
      playerMode: 'learning',
      items: [
        {
          title: 'Chapter 1: Outputs, Outcomes and Benefits',
          timestamp: 0,
          duration: 75,
          content: 'An output is what the project produces. An outcome is the change that results from using it. A benefit is the value the organisation gains from that change. Projects are judged on benefits, so plans need to show how each output leads to one.',
          takeaway: 'Link every deliverable to an outcome and a benefit.'
        },
        {
          title: 'Chapter 2: Naming Owners and Measures',
          timestamp: 75,
          duration: 90,
          content: 'Each benefit needs an owner in the business who is accountable for realising it and a measure that shows whether it has been achieved. Without these, benefits are hoped for rather than managed.',
          takeaway: 'Give every benefit an owner and a measure.'
        },
        {
          title: 'Chapter 3: Tracking After Closure',
          timestamp: 165,
          duration: 80,
          content: 'Many benefits appear only after the project has finished. Agree who will track them, when they will be reviewed and how the results will be reported back to the sponsor.',
          takeaway: 'Plan for benefits tracking beyond project closure.'
        }
      ]
    }
  },

  // 37. Comparison Slider Preset 2: Requirements
  {
    id: 'cs-vague-vs-clear-requirement',
    componentId: 'comparison-slider',
    title: 'Writing Requirements: Vague vs Clear',
    name: 'Writing Requirements: Vague vs Clear',
    description: 'Visual before-and-after comparison of a vague requirement and one rewritten to be specific and testable.',
    domain: 'Requirements',
    config: {
      blockTitle: 'REQUIREMENTS QUALITY',
      blockHeadline: 'From Vague to Testable',
      blockDesc: 'Drag the slider to compare a vague requirement with one that a team can build and a customer can verify.',
      beforeLabel: 'Vague Requirement',
      afterLabel: 'Clear, Testable Requirement',
      items: [
        {
          beforeLabel: 'Vague',
          afterLabel: 'Clear and Testable',
          beforeAltText: 'A requirement card reading: the system should be fast and easy to use',
          afterAltText: 'A requirement card reading: search results appear within two seconds for 95 percent of queries'
        }
      ]
    }
  },

  // 38. Horizontal Timeline Preset 2: Evolution of Project Management
  {
    id: 'ht-pm-evolution',
    componentId: 'horizontal-timeline',
    title: 'How Project Management Has Evolved',
    name: 'How Project Management Has Evolved',
    description: 'Chronological overview of the major shifts in how organisations plan and deliver projects.',
    domain: 'Project Management History',
    config: {
      blockTitle: 'A BRIEF HISTORY',
      blockHeadline: 'The Evolution of Project Management',
      blockDesc: 'Explore how the discipline has changed from early scheduling techniques to today’s mix of approaches.',
      items: [
        {
          date: '1950s',
          title: 'Scheduling Techniques Emerge',
          content: 'Critical path and network scheduling methods are developed to plan large engineering and defence programs.',
          badge: 'Scheduling',
          badgeType: 'info'
        },
        {
          date: '1960s-1980s',
          title: 'A Profession Forms',
          content: 'Project managers organise into professional bodies, share practices and begin to define a common body of knowledge.',
          badge: 'Profession',
          badgeType: 'info'
        },
        {
          date: '1990s',
          title: 'Standards and Certification',
          content: 'Common standards and professional certifications give organisations a shared language for managing projects.',
          badge: 'Standards',
          badgeType: 'info'
        },
        {
          date: '2000s',
          title: 'Agile Ways of Working Spread',
          content: 'Iterative approaches from software development show how frequent delivery and feedback can reduce risk.',
          badge: 'Agile',
          badgeType: 'primary'
        },
        {
          date: 'Today',
          title: 'Tailoring and Hybrid Approaches',
          content: 'Teams choose and combine predictive, agile and hybrid practices to suit each project, and focus on value as well as delivery.',
          badge: 'Tailored',
          badgeType: 'success'
        }
      ]
    }
  },

  // 39. Interactive Video Preset 3: Onboarding a New Team Member
  {
    id: 'iv-onboarding-team-member',
    componentId: 'interactive-video',
    title: 'Onboarding a New Team Member',
    name: 'Onboarding a New Team Member',
    description: 'Video with embedded checkpoints on preparing, welcoming and supporting someone who joins a project mid-way.',
    domain: 'Team Leadership',
    config: {
      blockTitle: 'TEAM LEADERSHIP',
      blockHeadline: 'Welcoming Someone to a Running Project',
      blockDesc: 'Follow the project manager through the first week of a new team member. Respond to the prompts before continuing.',
      resumeBehaviour: 'automaticAfterCorrectAnswer',
      completionRule: 'allRequiredInteractionsCompleted',
      items: [
        {
          type: 'information',
          timestamp: 20,
          title: 'Step 1: Prepare Before Day One',
          content: 'Arrange access to tools and documents, tell the team who is joining and choose a buddy who can answer everyday questions.'
        },
        {
          type: 'multipleChoice',
          timestamp: 50,
          title: 'Step 2: What to Cover in the First Conversation',
          prompt: 'What is the most important thing to cover in the first conversation with a new team member?',
          options: [
            { text: 'The purpose of the project, their role and how their work fits in.', correct: true, feedback: 'Correct! Understanding purpose and role lets the person make good decisions from the start.' },
            { text: 'A complete history of every past decision on the project.', correct: false, feedback: 'Incorrect. Too much history overwhelms a newcomer. Share it gradually.' },
            { text: 'Nothing yet. Let them find their own way for the first week.', correct: false, feedback: 'Incorrect. Without early guidance people waste time and feel unwelcome.' }
          ]
        },
        {
          type: 'information',
          timestamp: 85,
          title: 'Step 3: Check In Early and Often',
          content: 'Hold short check-ins during the first two weeks to answer questions, give feedback and adjust the plan for their onboarding.'
        }
      ]
    }
  },

  // 40. Learning Audio Player Preset 3: Mentorship
  {
    id: 'ap-mentorship-leadership',
    componentId: 'audio-player',
    title: 'Mentorship Dialogue: Becoming a Project Leader',
    name: 'Mentorship Dialogue: Becoming a Project Leader',
    description: 'Mentor conversation about the shift from doing the work yourself to leading others to do it.',
    domain: 'Professional Mentorship',
    config: {
      audioTitle: 'From Team Member to Project Leader',
      audioSubtitle: 'Mentorship and Career Development',
      audioDescription: 'Join an experienced project leader as they explain the key changes in mindset, common pitfalls and habits that help when you move into leadership.',
      playerMode: 'podcast',
      items: [
        {
          title: '1. The Multiplier Mindset',
          timestamp: 0,
          duration: 90,
          content: 'As an individual contributor, your output was measured by the work you personally completed. As a leader, your success is measured by what the whole team achieves and by how well it works together.',
          takeaway: 'Shift from personal output to team leverage.'
        },
        {
          title: '2. Delegating with Purpose',
          timestamp: 90,
          duration: 85,
          content: 'Resist the temptation to take on the hardest tasks yourself under pressure. Delegating meaningful challenges with clear boundaries helps people grow and frees you to lead.',
          takeaway: 'Delegate problems and boundaries, not just routine tasks.'
        },
        {
          title: '3. Communicating with Business Stakeholders',
          timestamp: 175,
          duration: 95,
          content: 'Leaders in the business think in terms of value, risk and time to market. Frame your proposals in those terms, and describe technical or process detail only as far as it helps the decision.',
          takeaway: 'Translate project detail into business value.'
        }
      ]
    }
  },

  // 41. Comparison Slider Preset 3: Brand Guidelines Compliance vs Non-Compliant
  {
    id: 'cs-brand-identity-compliance',
    componentId: 'comparison-slider',
    title: 'Design System Inspection: Brand Compliant vs Non-Compliant Layout',
    name: 'Design System Inspection: Brand Compliant vs Non-Compliant Layout',
    description: 'Interactive QA inspection highlighting compliant Violet/Aqua and Aeonik typography against unapproved colours and low-contrast elements.',
    domain: 'Brand & UX Standards',
    config: {
      blockTitle: 'BRAND QUALITY CONTROL',
      blockHeadline: 'Design System Compliance Review',
      blockDesc: 'Drag the inspection slider to compare an unapproved, low-contrast mockup against a layout that follows the PMI brand system.',
      beforeLabel: 'Non-Compliant Mockup (Contrast & Colour Violations)',
      afterLabel: 'Certified PMI Layout (Brand & WCAG AA)',
      items: [
        {
          beforeLabel: 'Non-Compliant (Violations)',
          afterLabel: 'Certified (Brand Compliant)',
          beforeAltText: 'UI mockup with unapproved grey colours and failing contrast ratios',
          afterAltText: 'UI mockup with official Violet and Aqua colours, Aeonik typography and passing WCAG contrast'
        }
      ]
    }
  },

  // 42. Comparison Matrix Preset 3: Learning Pathways
  {
    id: 'pm-career-pathways',
    componentId: 'pricing-comparison',
    title: 'Learning Pathways: Project Manager vs Product Owner',
    name: 'Learning Pathways: Project Manager vs Product Owner',
    description: 'Compare curriculum milestones, practice activities and certification options across two learning tracks.',
    domain: 'Workforce Development',
    config: {
      blockTitle: 'CAREER PATHWAYS',
      blockHeadline: 'Choose Your Learning Track',
      blockDesc: 'Compare what each track covers, the time it takes and the practice you will do along the way.',
      items: [
        {
          title: 'Project Manager Track',
          planName: 'Project Manager',
          price: '40 Hours',
          priceSub: 'Structured Track',
          isPopular: false,
          badgeText: 'Delivery Focus',
          features: [
            { text: 'Planning scope, schedule and budget', included: true },
            { text: 'Risk and issue management', included: true },
            { text: 'Stakeholder engagement and communication', included: true },
            { text: 'Change control and governance', included: true },
            { text: 'Backlog and product roadmap ownership', included: false },
            { text: 'Facilitating iteration reviews', included: false }
          ],
          buttonText: 'Enrol in the Project Manager Track'
        },
        {
          title: 'Product Owner Track',
          planName: 'Product Owner',
          price: '32 Hours',
          priceSub: 'Hands-On Track',
          isPopular: true,
          badgeText: 'High Demand',
          features: [
            { text: 'Backlog and product roadmap ownership', included: true },
            { text: 'Writing user stories and acceptance criteria', included: true },
            { text: 'Prioritising by value', included: true },
            { text: 'Facilitating iteration reviews', included: true },
            { text: 'Stakeholder engagement and communication', included: true },
            { text: 'Formal change control', included: false }
          ],
          buttonText: 'Enrol in the Product Owner Track'
        }
      ]
    }
  },

  // 43. Vertical Timeline Preset 2: Project Recovery
  {
    id: 'vt-project-recovery-timeline',
    componentId: 'vertical-timeline',
    title: 'Recovering a Struggling Project (First 30 Days)',
    name: 'Recovering a Struggling Project (First 30 Days)',
    description: 'A step-by-step timeline of the actions a new project manager takes when asked to recover a project that is behind.',
    domain: 'Project Recovery',
    config: {
      blockTitle: 'PROJECT RECOVERY',
      blockHeadline: 'The First 30 Days of a Project Recovery',
      blockDesc: 'Follow the sequence of actions from first assessment to a re-baselined plan the sponsor has approved.',
      timelineCategoriesEnabled: true,
      timelineCollapsibleDetails: true,
      timelineChronologicalReveal: true,
      timelineShowProgress: true,
      items: [
        {
          date: 'Day 1-3',
          title: 'Listen and Assess',
          content: 'Meet the sponsor, team and key stakeholders. Read the plan, the risk register and recent status reports, and ask what people think is going wrong.',
          category: 'ASSESS'
        },
        {
          date: 'Day 4-10',
          title: 'Find the Root Causes',
          content: 'Separate symptoms from causes: unclear scope, unrealistic estimates, missing skills or weak governance. Confirm them with evidence.',
          category: 'DIAGNOSE'
        },
        {
          date: 'Day 11-17',
          title: 'Reset Scope and Priorities',
          content: 'Agree with the sponsor what must be delivered, what can wait and what can be dropped so the plan fits the constraints.',
          category: 'RESET'
        },
        {
          date: 'Day 18-25',
          title: 'Re-plan and Re-estimate',
          content: 'Rebuild the schedule and budget with the team, identify the critical path and record the assumptions and risks.',
          category: 'PLAN'
        },
        {
          date: 'Day 26-30',
          title: 'Approve the New Baseline',
          content: 'Present the recovery plan to the sponsor for approval, agree the reporting cadence and communicate the new plan to everyone involved.',
          category: 'RESOLVE'
        }
      ]
    }
  }
];

export function getPresetsForComponent(componentId) {
  if (!componentId) return [];
  return WORKPLACE_PRESETS.filter(preset => preset.componentId === componentId);
}

export function getPresetById(presetId) {
  return WORKPLACE_PRESETS.find(preset => preset.id === presetId) || null;
}
