# Sustainable Product Engineering — Categories & Tiles

100 concepts organized into 5 categories spanning the full landscape of sustainable digital product development. Each tile represents a principle, practice, or concept drawn from best practice, research, and leading authors in the field.

-----

## 1. Product Thinking (15 tiles)

Covers the *why* and *what* of sustainable product development — from vision and roadmap to lifecycle awareness and responsible design decisions.

|# |Name                      |Description                                                                                 |
|--|--------------------------|--------------------------------------------------------------------------------------------|
|1 |Product Vision            |A clear, inspiring long-term goal that guides all product decisions                         |
|2 |Lifecycle Mindset         |Considers full product life from concept to sunset, accounting for resources at every stage |
|3 |Digital Sufficiency       |Build only what users need; the most sustainable feature is the one not built               |
|4 |Feature Waste             |Unused features consume resources; identify and remove them relentlessly                    |
|5 |Value-First Prioritization|Prioritize work by user value and environmental cost together                               |
|6 |Carbon-aware Discovery    |Bring carbon and energy impact into product discovery alongside feasibility and desirability|
|7 |Ethical Defaults          |Default settings nudge users toward lower-impact behavior                                   |
|8 |Sustainable OKRs          |Objectives that include energy, carbon, or efficiency outcomes alongside growth             |
|9 |Long-term Thinking        |Optimize for years of operation, not the next quarter                                       |
|10|Low-impact UX             |Design interactions that minimize compute, network, and battery on the client               |
|11|Accessibility             |Accessible products reach more users with the same energy footprint                         |
|12|Concept Kill              |Disciplined sunsetting of dead features; removal is a release                               |
|13|Purposeful Roadmap        |Roadmap aligned with sustainability goals, not only revenue                                 |
|14|Reduce, Reuse, Refactor   |Reuse before build; refactor before rewrite; remove before add                              |
|15|User Research             |Evidence-based product decisions avoid building the wrong thing entirely                    |

-----

## 2. People & Culture (15 tiles)

Covers the human side of sustainable engineering — motivation, safety, craftsmanship, and the conditions that allow people to do their best, most efficient work. Draws from Pink's Drive, Edmondson's psychological safety research, and XP values.

|# |Name                |Description                                                                                   |
|--|--------------------|----------------------------------------------------------------------------------------------|
|16|Purpose             |Engineers who understand environmental impact engage more deeply with efficiency work         |
|17|Autonomy            |Teams empowered to choose greener tools and architectures act faster than top-down mandates   |
|18|Mastery             |Treat efficiency as engineering craftsmanship, not a chore                                    |
|19|Psychological Safety|Without safety, engineers won't raise inefficiency concerns or push back on wasteful asks     |
|20|Sustainable Pace    |Burnt-out teams cut corners; sustainable pace is a precondition for sustainable systems       |
|21|Craftsmanship       |Code quality, clean architecture, and efficiency are the same discipline from different angles|
|22|Learning Culture    |Organizations that learn continuously outpace those that follow fixed processes               |
|23|Mentorship          |Senior engineers transfer efficiency intuition to juniors; culture scales by mentorship       |
|24|Experimentation     |Safe-to-try experiments with greener stacks, regions, and patterns                            |
|25|Green Awareness     |Shared understanding of environmental impact across the whole team                            |
|26|Diversity           |Diverse teams make better decisions, including sustainability trade-offs                      |
|27|Intrinsic Motivation|People solve hard problems better when motivated by meaning, not metrics                      |
|28|Feedback Culture    |Continuous, honest feedback accelerates improvement faster than reviews                       |
|29|Developer Experience|Good DX reduces toil, errors, and rework — all forms of waste                                 |
|30|Wellbeing           |Healthy engineers write better, more efficient code over the long run                         |

-----

## 3. Organization & Structure (18 tiles)

Covers how teams, processes, and governance are designed to enable sustainable delivery. Draws from Galbraith's Star Model (Strategy, Structure, Processes, Rewards, People), Team Topologies, and LeSS.

|# |Name                   |Description                                                                                |
|--|-----------------------|-------------------------------------------------------------------------------------------|
|31|Strategy               |Galbraith: organizational direction that sustainability goals must connect to              |
|32|Structure              |Galbraith: how teams are grouped affects coordination cost and flow efficiency             |
|33|Processes              |Galbraith: lateral connections and workflows that reduce handoffs and waste                |
|34|Rewards                |Galbraith: incentives aligned with sustainability outcomes, not only velocity              |
|35|People Practices       |Galbraith: hiring, development, and retention policies that reinforce sustainable culture  |
|36|Feature Teams          |Cross-functional teams own end-to-end value, eliminating handoff waste                     |
|37|Team Topology          |Deliberate team design: stream-aligned, platform, enabling, and complicated-subsystem teams|
|38|Communities of Practice|Cross-team forums that share green engineering lessons and standards                       |
|39|Coordination Cost      |Every coordination touchpoint is waste; minimize deliberately                              |
|40|Psychological Ownership|Teams own their service end-to-end including its energy and cost profile                   |
|41|Autonomy at Scale      |Federated decision-making beats central control for speed and sustainability               |
|42|Decentralized Decisions|Push decisions to where the knowledge is; reduces delays and rework                        |
|43|Platform Thinking      |Internal platforms reduce duplicated effort and enable greener defaults                    |
|44|Conway's Law           |System architecture mirrors communication structure; design orgs for the systems you want  |
|45|Org Debt               |Accumulated structural inefficiencies that slow delivery and waste effort                  |
|46|Co-location            |Physical or virtual proximity reduces communication overhead and coordination waste        |
|47|Shared Responsibility  |Sustainability is everyone's job, not a specialist team's                                  |
|48|Lean Governance        |Lightweight governance that enables rather than blocks sustainable decisions               |

-----

## 4. Flow & Measurement (25 tiles)

Covers the science of delivery flow and the metrics that make sustainability visible. Draws from Lean, Kanban, DORA research, and the Green Software Foundation's Software Carbon Intensity specification.

|# |Name                   |Description                                                                                                                    |
|--|-----------------------|-------------------------------------------------------------------------------------------------------------------------------|
|49|Value Stream           |End-to-end sequence of activities that delivers value to the customer                                                          |
|50|Lead Time              |Time from idea to production; shorter means less in-flight WIP and less waste                                                  |
|51|Cycle Time             |Time from work started to work done; primary indicator of team responsiveness                                                  |
|52|Throughput             |Items completed per unit of time; use with WIP to apply Little's Law                                                           |
|53|WIP Limit              |Cap on work in progress; forces focus and exposes bottlenecks                                                                  |
|54|Flow Efficiency        |Ratio of value-add time to total elapsed time; low ratio means hidden waste                                                    |
|55|Bottleneck             |The slowest step constraining the whole system; find it and fix it first                                                       |
|56|Handoff Reduction      |Every handoff adds delay, defects, and waste; eliminate or absorb                                                              |
|57|Pull System            |Work pulled when capacity exists, not pushed by schedule; prevents overload                                                    |
|58|Batch Size             |Smaller batches flow faster, fail cheaper, and waste less infra time                                                           |
|59|Feedback Loops         |Short, fast loops reduce the cost of mistakes and wasted work                                                                  |
|60|Waste Taxonomy         |Seven types of lean waste applied to software: defects, overproduction, waiting, transport, inventory, motion, extra processing|
|61|DORA Metrics           |Deployment frequency, lead time, change failure rate, recovery time as delivery health indicators                              |
|62|SCI Score              |Software Carbon Intensity: emissions per unit of work, the standard green software metric                                      |
|63|Energy per Request     |Energy consumed per request as a primary efficiency metric for services                                                        |
|64|Carbon Footprint       |Total emissions across compute, storage, network, and embodied hardware                                                        |
|65|PUE                    |Power Usage Effectiveness: ratio of total facility energy to compute energy; lower is better                                   |
|66|Resource Utilization   |CPU, memory, network actually used vs provisioned; under-utilization is waste                                                  |
|67|DORA-Green             |DORA metrics extended with carbon and energy per deploy or per change                                                          |
|68|Carbon-aware Scheduling|Run workloads when and where the grid is greenest                                                                              |
|69|Value/Carbon Ratio     |User value delivered per unit of carbon emitted; the core SPE efficiency metric                                                |
|70|Observability          |Deep insight into system behavior enables targeted efficiency improvements                                                     |
|71|Cost of Delay          |Quantifies the business impact of waiting; drives smarter prioritization                                                       |
|72|Technical Debt Metrics |Measure and track debt that slows delivery and increases energy waste                                                          |
|73|Experimentation Metrics|Measure the carbon and energy cost of A/B tests and experiments                                                                |

-----

## 5. Engineering & Systems (27 tiles)

Covers the technical practices, architectural patterns, and operational choices that determine a system's energy and carbon footprint. Spans code-level efficiency, system design, cloud operations, and hardware lifecycle.

|#  |Name                     |Description                                                                                  |
|---|-------------------------|---------------------------------------------------------------------------------------------|
|74 |Efficient Algorithms     |Lower complexity means less compute, less energy; Big-O maps directly to carbon at scale     |
|75 |Clean Code               |Readable, simple code is easier to optimize and cheaper to run                               |
|76 |Refactoring              |Continuous improvement of internal structure without changing behavior                       |
|77 |Technical Debt           |Accumulated shortcuts that slow delivery and increase energy cost over time                  |
|78 |Test-driven Development  |TDD produces simpler designs that consume less to run and maintain                           |
|79 |Continuous Integration   |Frequent integration catches waste early before it compounds                                 |
|80 |Continuous Delivery      |Every change releasable on demand; reduces inventory and idle infra                          |
|81 |Green Coding Patterns    |Language and pattern choices that minimize CPU, memory, and I/O                              |
|82 |Caching Strategy         |Avoid recomputing what can be stored; major energy saver at scale                            |
|83 |Lazy Loading             |Load only what is needed, when needed; reduces unnecessary compute and transfer              |
|84 |Efficient Data Structures|Right data structure for the job reduces compute and memory waste                            |
|85 |API Design               |Chatty APIs waste network and compute; design for efficiency from the start                  |
|86 |Sustainable Architecture |System design that minimizes resource use over the full operational lifetime                 |
|87 |Microservices vs Monolith|Right-sizing service granularity; over-decomposition creates coordination and energy overhead|
|88 |Event-driven Architecture|Decoupled, asynchronous systems avoid idle polling and over-provisioning                     |
|89 |Data Gravity             |Move compute to data, not data to compute; reduces transfer energy significantly             |
|90 |Carbon-aware Compute     |Shift workloads to times and regions with lower carbon intensity                             |
|91 |Right-sizing             |Match resource provisioning to actual need; avoid chronic over-provisioning                  |
|92 |Serverless               |Pay-per-use model eliminates idle resource waste; but watch cold start overhead              |
|93 |Edge Computing           |Process data closer to users; reduces latency, transfer energy, and central load             |
|94 |Green Cloud Selection    |Choose cloud providers and regions by renewable energy commitments                           |
|95 |Infrastructure as Code   |Reproducible, reviewable infra reduces drift, waste, and manual error                        |
|96 |Immutable Infrastructure |Replacing instead of patching reduces configuration drift and wasted compute                 |
|97 |Chaos Engineering        |Proactively test resilience; failures in production waste more energy than controlled tests  |
|98 |FinOps                   |Financial accountability for cloud spend directly correlates with energy efficiency          |
|99 |Embodied Carbon          |Hardware manufacturing emissions; use hardware longer, provision less                        |
|100|Circular IT              |Extend hardware life, refurbish, recycle; reduce embodied carbon footprint                   |

-----

*Sustainable Product Engineering · 100 concepts · 5 categories · v1.0*
