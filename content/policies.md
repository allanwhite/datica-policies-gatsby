---
title: "Compliance Policies"
metaTitle: "Compliance Policies"
metaDescription: "The goal of this policy is to guide and direct Datica workforce members on how to defend its assets against internal, external, deliberate or accidental threats."
---

## Access Management Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.b User Registration
* 01.c Privilege Management
* 01.e Review of User Access Rights
* 01.j User Authentication for External Connections
* 01.n Network Connection Control
* 01.q User Identification and Authentication
* 01.v Information Access Restriction
* 02.i Removal of Access Rights
* 05.i Identification of Risks Related to External Parties
* 06.e Prevention of Misuse of Information Assets
* 08.j Equipment Maintenance
* 09.c Segregation of Duties
* 09.m Network Controls
* 09.s Information Exchange Policies and Procedures
* 09.v Electronic Messaging

## Asset Management Policy

Applicable Standards from the HITRUST Common Security Framework:

* 07.a Inventory of Assets

## Auditing, Logging and Monitoring Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.v Information Access Restriction
* 06.e Prevention of Misuse of Information Assets
* 06.g Compliance with Security Policies and Standards
* 09.aa Audit Logging
* 09.ab Monitoring System Use
* 09.ad Administrator and Operator Logs
* 09.j Controls Against Malicious Code

## Change Management Policy

It is Datica’s goal to make all reasonable and appropriate attempts to maintain the confidentiality, integrity, and availability of its production systems when changing, updating, modifying, or otherwise introducing new applications or technologies into the production environment. All change records shall be stored for 6 years. This policy establishes overarching change control measures used to achieve this goal.

A designated team of people within Datica comprise the Change Advisory Board (CAB). This team will review changes, approve them where required (or not), and review emergency changes after the emergency has been resolved. A designee from the CAB will report emergency changes to the SCG Group.  The CAB is comprised of technical and customer support department heads and members of the Information Security/Risk Management/Compliance team. 

#### Three categories of change:

1. A **Standard Change** is a low-risk configuration change, release, or update that has little or no chance to affect the availability of Tier 1 or Tier 2 systems or applications. A list of examples of changes that are likely to fall into the Standard category can be found in the Change Management SOP. These changes do not require approval by the CAB prior to execution. The change procedures are reviewed periodically by the CAB to ensure compliance with the process. Standard changes do need to be reviewed by a qualified individual, such as the relevant department head, to confirm that the change is, in fact, a routine and low-risk change. These changes require some planning for how the change will be deployed, who is performing the change, QA testing, and a rollback plan. Standard Changes follow a pre-approved, well-defined procedure. These changes have a very low likelihood of causing interruption of service, are changes that have been developed and tested in a documented, repeatable way, have undergone peer review as part of their development, and have a documented and/or automated release/deployment process. Changes that do not affect the stability, availability, or security of production systems and services (Tier 1 systems) would likely fall into this category. A standard change requires that a standard change management ticket be created and filled out prior to completion or implementation of the change.
2. A **Controlled Change** is any change that is not in the list of the types of changes that are categorized as a standard change. Controlled changes are changes that might require downtime or might affect the stability of Tier 1 or Tier 2 systems and applications. These changes have either higher risk or difficult to define risks associated with them and as a result, require review and approval from technical experts in the company. These changes follow a defined approval process that includes a predefined information set. The approvals can be quick and resolved electronically in a Change Management ticket. Any of the approvers can escalate the review of the change to a more rigorous review where additional evaluation can occur. Changes that affect the stability, availability, or security of production systems and services (Tier 1 systems) would likely fall into this category. A controlled change requires a controlled change management ticket to be created and filled out. The Change Advisory Board or delegate will then review and approve the ticket. If necessary, additional analysis and requests for information can be made before approval is granted. These changes also require a declared maintenance window that is communicated with customers in advance of the change. Controlled changes require extensive QA testing, appropriate staffing during the change, documented test plan to ensure that the change was successful, and a complete rollback plan to follow in the event the change needs to be reverted.
3. An **Emergency Change **is the result of an outage, failure, or incident. These changes are intended to return production environments to a working state. They require that after the environment is stable and returned to normal function that a Root Cause Analysis be performed and documented that details the cause of the emergency, the nature of the fix, the extent of damage or loss, the individuals involved in the change and measures to be taken to ensure that the issue does not happen again. The CAB or delegate leads the analysis and ensures that the documentation is sufficient and communicated to the appropriate parties. An Emergency Change process is utilized in situations where immediate action is required and delays in the implementation of the change can detrimentally impact Datica and/or its customers. Whenever possible, obtain approval for Emergency Changes from your Team Lead or Manager. These changes shall be applied as quickly as prudently possible. After the critical situation is resolved, a formal review must take place. The review shall:

    * Assess the root cause(s) that necessitated the change
    * Evaluate the approach for the resolution to learn from the process 
    * Ensure that additional risk was not introduced
    * Review the Emergency Change ticket involved to gather the necessary pre-change information and then gather and capture necessary post-change information

Applicable Standards from the HITRUST Common Security Framework:

* 09.b Change Management
* 09.m Network Controls
* 10.h Control of Operational Software
* 10.k Change Control Procedures

## Classification Policy

### Information Classification

The minimum classification of an information store, application, or system is inheritable. For example, an application that stores, processes, or transmits Tier 1 (Protected) data is automatically considered a Tier 1 (Protected) application.

#### Tier 1 - Protected

This tier includes all information that is mandated to be protected under a specific compliance regime. It is assumed that any customer information store falls into this category. Tier 1 information is considered extremely sensitive and must be safeguarded in order to protect the privacy of individuals, the security and integrity of systems, to guard against fraud, and to reduce the risk of unauthorized disclosure. Tier 1 information may include, but is not limited to:
 
* Protected Health Information (PHI) - governed under HIPAA/HITECH
* Cardholder Data (CHD) - governed under PCI-DSS/PA-DSS
* Personal Data for an EU Citizen - governed under GDPR
* Social Security Numbers
* Credit and debit card numbers
* Bank account or other financial account numbers
* Clear-text passwords, passphrases, PINs, security and access codes
* Information and data elements governed by State-specific privacy laws

This may also include data that is not related to a customer and is, instead, Datica’s sole responsibility.

Under no circumstances can Tier 1 (Protected) data be stored outside protected environments. When at rest, Tier 1 (Protected) data must be encrypted and, when transmitted across untrusted networks (including inter-system communication in cloud environments. Essentially, all networks that are not located inside a Datica-owned facility are considered untrusted), the transmission must be encrypted.  Datica makes it a matter of policy to not access customer protected data stores unless explicitly allowed by the customer and only after support request, notification is made to the customer that such access is necessary, or to restore system functionality.

Under no circumstances can Tier 1 (Protected) information be used in non-production environments.

Access to Tier 1 (Protected) data is limited only to those with a business need. Access must be authenticated using two-factor authentication mechanisms. The information in this category must not be stored on any mobile computing device or physical storage device such as a laptop, smartphone, PDA, USB drive, flash drive, or any mobile media, regardless of whether the device is owned by Datica, is personally owned, or owned by any other external party or persons.

See the System Security Policy, Data Integrity Policy and Encryption Standard for detailed enumeration of the controls necessary to protect Tier 1 (Protected) data at rest and in transit.

#### Tier 2 - Confidential

Tier 2 contains restricted information that is required to be maintained in a highly confidential manner as directed by Datica’s Privacy Officer, applicable law or regulation, contractual obligation, or subject to any applicable legal privilege or protection. Examples include, but are not limited to:

* Business critical intellectual property, proprietary data, and/or trade secrets
* Application source code
* Legal contracts
* HR records (e.g., background check reports, salary, DoB, employment records etc.)
* Non-public tax and accounting data
* Passwords, passphrases and password storage databases
* Encryption keys
* Device or system configurations, virtual machine images, snapshots
* Network and infrastructure designs
* Customer lists and contacts
* Security, system, and application audit logs
* Internal information security protocols, plans, and processes

Access to Tier 2 (Confidential) data is limited to Datica employees and third parties operating under an executed non-disclosure agreement. This information should never be stored on a computing device or electronic storage media that is personally owned unless expressly permitted.

See the System Security Policy, Data Integrity Policy and Encryption Standard for detailed enumeration of the controls necessary to protect Tier 2 (Confidential) data at rest and in transit.

#### Tier 3 - Private

This tier includes "official use only" information about the business and its personnel that can be shared with Datica staff and its authorized partners, but will not be routinely made available to the public without explicit authorization from the Privacy Officer or CSO or delegate. Information in this category includes, but is not limited to:

* Operational procedures
* Employee benefits "brochure" information
* Business application data that does not fall into Tier 1 or 2 categories
* Email that does not contain Tier 1 or 2 information
* Interpersonal communication (e.g., Slack, Zoom, Google Hangouts)
* IP addresses, system names, account names

Access to this information is limited to Datica employees or third parties operating under an executed non-disclosure agreement. This information should never be stored on a computing device or electronic storage media that is personally owned.

#### Tier 4 - Public

This tier includes data and information that are considered to freely exist in the public domain and contain no information from Tier 1, 2, or 3.

### Application Classification

Application classification follows the type of information that the application handles (stores, processes, or transmits). If an application handles Tier 1 (Protected) data, then the application is considered a Tier 1 (Protected) application. 

#### Tier 1 - Protected

Any application that is involved with the storage, processing, or transmission of Tier 1 data is considered a Tier 1 (Protected) application.

#### Tier 2 - Confidential

Any application that stores, processes, or transmits Tier 2 (Confidential) information is considered a Tier 2 (Confidential) application.

#### Tier 3 - Private

Any application that stores, processes, or transmits Tier 3 (Private) information is considered a Tier 3 (Private) application.

#### Tier 4 - Common Tools and Applications

Tier 4 applications represent tools that are commonly installed with most modern operating systems (SSH, Internet browser and plugins, SFTP client, password safes, etc…) and which might be used to work with higher Tier information, but only as a way to administer or consume the information. Many of the standards (or the Acceptable Use Policy) will outline specific configuration and usage restrictions for the use of these common tools.

### System Classification

A "System" can be a range of technology mechanisms that perform a discrete function or service. A System may be a single process running in a container or VM, or a set of processes spanning multiple containers and/or VMs.

#### Tier 1 - Production - Customer Facing

Systems that host customer containers or services or which directly affect or have an impact on the information security (e.g., confidentiality, availability, integrity) or compliance posture of those containers or services are considered a Tier-1 (Production) systems. 

#### Tier 2 - Stage/Test/QA - Internet Facing (Non-Customer)

Systems that host customer staging, test, or QA containers or services or Datica-administered services that are directly accessible from the Internet are considered Tier 2 (Confidential) systems.  Note that by policy, staging, test, or QA systems are forbidden to store, process, or transmit Tier 1 (Protected) data.

#### Tier 3 - Development environments / Workstations (Company-managed system)

Datica administered systems that host development environments and Datica-purchased workstations (including other mobile computing devices) are considered Tier 3 Dev systems.

#### Tier 4 - Unsecured (Personal/unmanaged system)

Any computing system that is not purchased or administered by Datica is considered a Tier 4 Unsecured system. This includes employee-owned workstations, mobile computing devices, and cloud-based environments and services. 

Applicable Standards from the HITRUST Common Security Framework:

* 01.w Sensitive System Isolation
* 06.c Protection of Organizational Records
* 06.d Data Protection and Privacy of Covered Information
* 10.a Security Requirements Analysis and Specification

## Credential Management Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.b User Registration
* 01.c Privilege Management
* 01.d User Password Management
* 01.q User Identification and Authentication

## Data Integrity Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.v Information Access Restriction
* 05.i Identification of Risks Related to External Parties
* 09.j Controls Against Malicious Code
* 09.v Electronic Messaging
* 10.h Control of Operational Software

## Data Retention and Media Destruction Policy

Applicable Standards from the HITRUST Common Security Framework:

* 06.c Protection of Organizational Records
* 08.l Secure Disposal or Re-Use of Equipment
* 09.aa Audit Logging
* 09.p Disposal of Media

## Disaster Recovery and Business Continuity Policy

Applicable Standards from the HITRUST Common Security Framework:

* 09.e Service Delivery
* 09.l Back-up
* 09.n Security of Network Services
* 12.b Business Continuity and Risk Assessment
* 12.c Developing and Implementing Continuity Plans Including Information Security
* 12.d Business Continuity Planning Framework

## Incident Response Policy

Datica has implemented an information security incident response plan and detailed process to provide an effective, efficient, and orderly approach to managing incidents (security-related and otherwise). The incident response plan must, at a minimum, provide documentation of the procedures to be taken by Datica staff members in the event of an incident, ensure that the incident is efficiently and systematically handled and communicated to the appropriate parties, facilitate the rapid recovery of the affected systems and identification of the cause of the incident, and provide a clear path for adopting preventive measures designed to address future incidents. Ultimately the Chief Security Officer or delegate is the owner of this plan and its implementation. The plan was developed to meet compliance obligations including:

* Effectively and quickly identify the nature of the incident, its scope and severity.
* Identify a single point of coordination and communication.
* Establish the criteria for the recognition of a potential security breach and document the requirements for reporting the breach.
* Establish the criteria for the declaration of a disaster and the subsequent invocation of the Disaster Recovery and Business Continuity Plan.
* Ensure that all employees and contractors are aware of their obligations to recognize and report potential incidents, and the sanctions if these instructions are not followed.
* Identify the specific individuals that need to be contacted in the event of an incident. This includes internal as well as external entities.
* Identify all employees involved in the incident.
* Testing the plan at least annually, or if the plan changes and using the results of the test (and lessons learned from any actual incident response events) to improve the plan.

### Breach Notification

To provide guidance for breach notification when impressive or unauthorized access, acquisition, use and/or disclosure of the ePHI occurs. Breach notification will be carried out in compliance with the American Recovery and Reinvestment Act (ARRA)/Health Information Technology for Economic and Clinical Health Act (HITECH) as well as any other federal or state notification law.

The Federal Trade Commission (FTC) has published breach notification rules for vendors of personal health records as required by ARRA/HITECH. The FTC rule applies to entities not covered by HIPAA, primarily vendors of personal health records. The rule is effective September 24, 2009 with full compliance required by February 22, 2010.

The American Recovery and Reinvestment Act of 2009 (ARRA) was signed into law on February 17, 2009. Title XIII of ARRA is the Health Information Technology for Economic and Clinical Health Act (HITECH). HITECH significantly impacts the Health Insurance Portability and Accountability (HIPAA) Privacy and Security Rules. While HIPAA did not require notification when patient protected health information (PHI) was inappropriately disclosed, covered entities and business associates may have chosen to include notification as part of the mitigation process. HITECH does require notification of certain breaches of unsecured PHI to the following: individuals, Department of Health and Human Services (HHS), and the media. The effective implementation of this provision is September 23, 2009 (pending publication HHS regulations).

### Datica HIPAA Breach Policy

1. Discovery of Breach: A breach of ePHI shall be treated as "discovered" as of the first day on which such breach is known to the organization, or, by exercising reasonable diligence would have been known to Datica (includes breaches by the organization's Customers, Partners, or subcontractors). Datica shall be deemed to have knowledge of a breach if such breach is known or by exercising reasonable diligence would have been known, to any person, other than the person committing the breach, who is a workforce member or Partner of the organization. Following the discovery of a potential breach, the organization shall begin an investigation (see organizational policies for security incident response and/or risk management incident response) immediately, conduct a risk assessment, and based on the results of the risk assessment, begin the process to notify each Customer affected by the breach. Datica shall also begin the process of determining what external notifications are required or should be made (e.g., Secretary of the Department of Health & Human Services (HHS), media outlets, law enforcement officials, etc.)
2. Breach Investigation: The Datica Security Officer shall name an individual to act as the investigator of the breach (e.g., privacy officer, security officer, risk manager, etc.). The investigator shall be responsible for the management of the breach investigation, completion of a risk assessment, and coordinating with others in the organization as appropriate (e.g., administration, security incident response team, human resources, risk management, public relations, legal counsel, etc.) The investigator shall be the key facilitator for all breach notification processes to the appropriate entities (e.g., HHS, media, law enforcement officials, etc.). All documentation related to the breach investigation, including the risk assessment, shall be retained for a minimum of six years. 
3. Risk Assessment: For an acquisition, access, use or disclosure of ePHI to constitute a breach, it must constitute a violation of the HIPAA Privacy Rule. A use or disclosure of ePHI that is incident to an otherwise permissible use or disclosure and occurs despite reasonable safeguards and proper minimum necessary procedures would not be a violation of the Privacy Rule and would not qualify as a potential breach. To determine if an impermissible use or disclosure of ePHI constitutes a breach and requires further notification, the organization will need to perform a risk assessment to determine if there is significant risk of harm to the individual as a result of impermissible use or disclosure. The organization shall document the risk assessment as part of the investigation in the incident report form noting the outcome of the risk assessment process. The organization has the burden of proof for demonstrating that all notifications to appropriate Customers or that the use or disclosure did not constitute a breach. Based on the outcome of the risk assessment, the organization will determine the need to move forward with breach notification. The risk assessment and the supporting documentation shall be fact specific and address:

    * onsideration of who impermissibly used or to whom the information was impermissibly disclosed;
    * he type and amount of ePHI involved;
    * he cause of the breach, and the entity responsible for the breach, either Customer, Datica, or Partner.
    * The potential for significant risk of financial, reputational, or other harm.

4. Timeliness of Notification: Upon discovery of a breach, notice shall be made to the affected Datica Customers no later than 4 hours after the discovery of the breach. It is the responsibility of the organization to demonstrate that all notifications were made as required, including evidence demonstrating the necessity of delay.
5. Delay of Notification Authorized for Law Enforcement Purposes: If a law enforcement official states to the organization that a notification, notice, or posting would impede a criminal investigation or cause damage to national security, the organization shall:

    * If the statement is in writing and specifies the time for which a delay is required, delay such notification, noice, or posting of the timer period specified by the official; or
    * If the statement is made orally, document the statement, including the identify of the official making the statement, and delay the notification, notice, or posting temporarily and no longer than 30 days from the date of the oral statement, unless a written statement as described above is submitted during that time.

6. Content of the Notice: The notice shall be written in plain language and must contain the following information:

    * A brief description of what happened, including the date of the breach and the date of the discovery of the breach, ifknown;
    * A description of the types of unsecured protected health information that were involved in the breach (such as whether full name, Social Security number, date of birth, home address, account number, diagnosis, disability code or oter types of information were involved), if known;
    * ny steps the Customer should take to protect Customer data from potential harm resulting from the breach.
    * A brief description of what Datica is doing to investigate the breach, to mitigate harm to individuals and Cutomers, and to protect against further breaches.
    * Contact procedures for individuals to ask questions or learn additional information, which may include a toll-free telephone number, an e-mail address, a website, or postal address.

7. Methods of Notification: Datica Customers will be notified via email and phone within the timeframe for reporting breaches, as outlined above.

### Datica Customer GDPR Breach Policy

1. Discovery of Breach: A breach of personal information regarding EU data subjects shall be treated as "discovered" as of the first day on which such breach is known to the organization, or, by exercising reasonable diligence would have been known to Datica (includes breaches by the organization's Customers, Partners, or subcontractors). Datica shall be deemed to have knowledge of a breach if such breach is known or by exercising reasonable diligence would have been known, to any person, other than the person committing the breach, who is a workforce member or Partner of the organization. Following the discovery of a potential breach, the organization shall begin an investigation (see organizational policies for security incident response and/or risk management incident response) immediately, conduct a risk assessment, and based on the results of the risk assessment, begin the process to notify each Customer affected by the breach. Once the breach has been confirmed by the Datica Security Officer, notice should be provided as soon as possible to Datica’s representative in the Union:

William Fry
Solicitors
2 Grand Canal Square
Grand Canal Dock
Dublin 2
Ireland
+353 1 639 5000


1. Breach Investigation: The Datica Security Officer shall name an individual to act as the investigator of the breach (e.g., privacy officer, security officer, risk manager, etc.). The investigator shall be responsible for the management of the breach investigation, completion of a risk assessment, and coordinating with others in the organization as appropriate (e.g., administration, security incident response team, human resources, risk management, public relations, legal counsel, etc.) The investigator shall be the key facilitator for all breach notification processes to Datica Customers. All documentation related to the breach investigation, including the risk assessment, shall be retained indefinitely. 

2. Risk Assessment: For an acquisition, access, use or disclosure of personal information regarding persons from the European Union, the loss of information must cause a "high risk to the rights and freedoms of natural persons." For example, if the personal information exposed is fully encrypted, and unable to be decrypted by unauthorized persons, the loss of that information would not constitute a breach. To determine if an impermissible use or disclosure of personal information constitutes a breach and requires further notification, the organization will need to perform a risk assessment to determine if there is a high risk to the rights and freedoms of the natural persons as a result of impermissible use or disclosure. The organization shall document the risk assessment as part of the investigation in the incident report form noting the outcome of the risk assessment process. The organization has the burden of proof for demonstrating that all notifications to appropriate Customers or that the use or disclosure did not constitute a breach. Based on the outcome of the risk assessment, the organization will determine the need to move forward with breach notification. The risk assessment and the supporting documentation shall be fact specific and address:

    * Consideration of who impermissibly used or to whom the information was impermissibly disclosed;
    * The type and amount of personal information involved;
    * The cause of the breach, and the entity responsible for the breach, either Customer, Datica, or Partner.
    * The potential for significant risk of financial, reputational, or other harm.

3. Timeliness of Notification: Upon discovery of a breach, notice shall be made to the affected Datica Customers without unreasonable delay, no later than 4 hours after the discovery of the breach. It is the responsibility of the organization to demonstrate that all notifications were made as required, including evidence demonstrating the necessity of delay. Datica is a "data processor" in relation to Customers, who are “data controllers”. Under GDPR, the data controller is responsible for providing notifications to all supervisory authorities and affected data subjects. Datica should not provide breach notification to anyone besides affected customers unless directed by an affected customer.

4. Delay of Notification Authorized for Law Enforcement Purposes: If a law enforcement official states to the organization that a notification, notice, or posting would impede a criminal investigation or cause damage to national security, the organization shall:

    * If the statement is in writing and specifies the time for which a delay is required, delay such notification, notice, or posting of the timer period specified by the official; or
    * If the statement is made orally, document the statement, including the identify of the official making the statement, and delay the notification, notice, or posting temporarily and no longer than 30 days from the date of the oral statement, unless a written statement as described above is submitted during that time.

5. Content of the Notice: The notice shall be written in plain language and must contain the following information:

    * A brief description of what happened, including the date of the breach and the date of the discovery of the breach, if known;
    * A description of the types of personal information that were involved in the breach (such as whether full name, national identifier, date of birth, home address, account number, diagnosis, disability code or other types of information were involved), if known;
    * A description of the likely consequences of the breach to affected individuals (e.g. risk of identity theft, risk of damage to reputation, etc.)
    * Any steps the Customer should take to protect Customer data from potential harm resulting from the breach.
    * A brief description of what Datica is doing to investigate the breach, to mitigate harm to individuals and Customers, and to protect against further breaches.
    * Contact procedures for individuals to ask questions or learn additional information, which may include a toll-free telephone number, an email address, a website, or postal address, including, but not limited to the contact information for Datica’s GDPR Data Protection Officer and its GDPR representative in the Union.

6. Methods of Notification: Datica Customers will be notified via email and phone within the timeframe for reporting breaches, as outlined above.

### Datica Platform Customer Responsibilities

1. The Datica Customer that accesses, maintains, retains, modifies, records, stores, destroys, or otherwise holds, uses, or discloses unsecured ePHI shall, without unreasonable delay and in no case later than 60 calendar days after discovery of a breach, notify Datica of such breach. The Customer shall provide Datica with the following information:

    * A description of what happened, including the date of the breach, the date of the discovery of the breach, and the number of records and Customers affected, if known.
    * A description of the types of unsecured protected health information that were involved in the breach (such as full name, Social Security number, date of birth, home address, account number, etc.), if known.
    * A description of the action taken with regard to notification of patients regarding the breach.
    * Resolution steps taken to mitigate the breach and prevent future occurrences.

2. Notice to Media: Datica Customers are responsible for providing notice to prominent media outlets at the Customer's discretion.

3. Notice to Secretary of HHS: Datica Customers are responsible for providing notice to the Secretary of HHS at the Customer's discretion.

### Breach notifications involving EU personal information collected by Datica

As a result of business activities that we undertake in the European Union, Datica may come into contact directly with personal information regarding European Union data subjects that results in Datica being considered a "data controller" under GDPR (ex. website account information collected from persons located in the geographic boundaries of the European Union). In the event of a breach of such information, a different procedure applies than the one that is used to respond to the loss of customer information.

1. Discovery of Breach: A breach of personal information shall be treated as "discovered" as of the first day on which such breach is known to the organization, or, by exercising reasonable diligence would have been known to Datica (includes breaches by the organization's Partners, or subcontractors). Datica shall be deemed to have knowledge of a breach if such breach is known or by exercising reasonable diligence would have been known, to any person, other than the person committing the breach, who is a workforce member or Partner of the organization. Following the discovery of a potential breach, the organization shall begin an investigation (see organizational policies for security incident response and/or risk management incident response) immediately, conduct a risk assessment, and based on the results of the risk assessment, begin the process to notify each Customer affected by the breach. Datica shall also begin the process of determining what external notifications are required or should be made (e.g., relevant European Union supervisory authorities, media outlets, law enforcement officials, etc.). Once the breach has been confirmed by the Datica Security Officer, notice should be provided as soon as possible to Datica’s representative in the Union:

William Fry
Solicitors
2 Grand Canal Square
Grand Canal Dock
Dublin 2
Ireland
+353 1 639 5000
 

1. Breach Investigation: The Datica Security Officer shall name an individual to act as the investigator of the breach (e.g., privacy officer, security officer, risk manager, etc.). The investigator shall be responsible for the management of the breach investigation, completion of a risk assessment, and coordinating with others in the organization as appropriate (e.g., administration, security incident response team, human resources, risk management, public relations, legal counsel, etc.) The investigator shall be the key facilitator for all breach notification processes to the appropriate entities (e.g., supervisory authorities, media, law enforcement officials, etc.). All documentation related to the breach investigation, including the risk assessment, shall be retained indefinitely. 

2. Risk Assessment: For an acquisition, access, use or disclosure of personal information to constitute a breach, the loss of information must cause a "high risk to the rights and freedoms of natural persons." For example, if the personal information exposed is fully encrypted, and unable to be decrypted by unauthorized persons, the loss of that information would not constitute a breach. To determine if an impermissible use or disclosure of personal information constitutes a breach and requires further notification, the organization will need to perform a risk assessment to determine if there is significant risk of harm to the individual as a result of impermissible use or disclosure. The organization shall document the risk assessment as part of the investigation in the incident report form noting the outcome of the risk assessment process. The organization has the burden of proof for demonstrating that all notifications to appropriate Customers or that the use or disclosure did not constitute a breach. Based on the outcome of the risk assessment, the organization will determine the need to move forward with breach notification. The risk assessment and the supporting documentation shall be fact specific and address:

    * Consideration of who impermissibly used or to whom the information was impermissibly disclosed;
    * The type and amount of personal information involved;
    * The cause of the breach, and the entity responsible for the breach, either Datica, or Partner.
    * The potential for significant risk of financial, reputational, or other harm.

3. Timeliness of Notification: Upon discovery of a breach, notice shall be made to the relevant EU supervisory authority without unreasonable delay, no later than 72 hours after the discovery of the breach. It is the responsibility of the organization to demonstrate that all notifications were made as required, including evidence demonstrating the necessity of delay.

4. Content of the Notice: The notice shall be written in plain language and must contain the following information:

    * A brief description of what happened, including the date of the breach and the date of the discovery of the breach, if known;
    * A description of the types of personal information that were involved in the breach (such as whether full name, national identifier, date of birth, home address, account number, diagnosis, disability code or other types of information were involved), if known;
    * A description of the likely consequences of the breach.
    * A brief description of what Datica is doing to investigate the breach, to mitigate harm to individuals and to protect against further breaches.
    * Contact procedures for Datica’s GDPR Data Protection Officer and its representative in the Union.

5. Methods of Notification: The appropriate supervisory authority will be notified via email and phone.

### Breach Accounting and Additional Considerations

The following applies to all breaches, regardless of the type of information involved in the breach.

* Maintenance of Breach Information/Log: As described above and in addition to the reports created for each incident, Datica shall maintain a process to record or log all breaches regardless of the number of records and Customers affected. The following information should be collected/logged for each breach:

    * A description of what happened, including the date of the breach, the date of the discovery of the breach, and the number of records and Customers affected, if known.
    * A description of the types of unsecured protected health information that were involved in the breach (such as full name, Social Security number, date of birth, home address, account number, etc.), if known.
    * A description of the action taken with regard to notification of patients regarding the breach.
    * Resolution steps taken to mitigate the breach and prevent future occurrences.

* Workforce Training: Datica shall train all members of its workforce on the policies and procedures with respect to personal information (including ePHI) as necessary and appropriate for the members to carry out their job responsibilities. Workforce members shall also be trained as to how to identify and report breaches within the organization.
* Complaints: Datica must provide a process for individuals to make complaints concerning the organization's patient privacy policies and procedures or its compliance with such policies and procedures.
* Sanctions: The organization shall have in place and apply appropriate sanctions against members of its workforce, Customers, and Partners who fail to comply with the privacy policies and procedures.
* Retaliation/Waiver: Datica may not intimidate, threaten, coerce, discriminate against, or take other retaliatory action against any individual for the exercise by the individual of any privacy rights. The organization may not require individuals to waive their privacy rights as a condition of the provision of treatment, payment, enrollment in a health plan, or eligibility for benefits.

Applicable Standards from the HITRUST Common Security Framework:

* 02.e Information Security Awareness, Education, and Training
* 02.f Disciplinary Process
* 05.a Management Commitment to Information Security
* 06.d Data Protection and Privacy of Covered Information
* 06.e Prevention of Misuse of Information Assets
* 11.a Reporting Information Security Events
* 11.c Responsibilities and Procedures
* 11.d Learning from Information Security Incidents

## Physical Security Policy

There are two principal workforce operating environments where physical security is under partial or full control of Datica: the corporate offices and third party cloud provider’s data center operations. Although different controls are applied at the different facilities, the physical security goals are largely the same: access to all Datica facilities is restricted to only authorized workforce members and security safeguards are in place to effectively minimize and manage risk to an acceptable level while remaining in compliance with Datica’s obligations to ensure the confidentiality, integrity, and availability of its, and its customers' assets. Corporate offices, authorized remote and teleworking locations, and all Datica information systems, shall not and do not store Tier 1 (Protected) physical or electronic data, such as ePHI and Cardholder Data. All workforce members are made aware of this requirement and routinely reminded that it is their responsibility to report an incident of unauthorized access or storage of covered data to Datica’s Chief Security Officer and/or Privacy Officer.

Datica works with third party vendors to assure restriction of physical access to Datica Systems. Datica and its subcontractors control access to the physical buildings/facilities that house these systems/applications, or in which Datica workforce members operate, in accordance with applicable compliance requirements (e.g., HIPAA, HITRUST, GDPR, etc.) and their implementation specifications. The following mandatory physical safeguards and workforce member obligations shall be constantly enforced at Datica:

* Visitor and third party support access is recorded and supervised. All visitors shall be escorted by employees or authorized delegates.
* Fire extinguishers and detectors are installed according to applicable laws and regulations; the fire authorities are automatically notified if a fire alarm is activated.
* Facility maintenance is controlled and conducted by authorized personnel in accordance with contractual obligations, supplier-recommended intervals, insurance policies, and the organization’s maintenance program. All maintenance work requiring physical interaction  shall be tracked. Datica maintains a list of authorized maintenance organizations or personnel, ensures that non-escorted personnel performing maintenance on the information system have required access authorizations, and designates organizational personnel with required access authorizations and technical competence to supervise the maintenance activities of personnel who do not possess the required access authorizations.
* Electronic and physical media containing covered information is securely destroyed (or the information securely removed) prior to disposal. Any surplus equipment must be stored securely while not in use, and disposed of or sanitized when no longer required.
* In situations where the physical mailing of covered and/or confidential materials is required, workforce members shall ensure the materials are not externally visible through the use of privacy envelopes, tamper-proof/evident mailers, etc.; the Office Administrator will facilitate the procurement and distribution of these supplies.
* Physical access is restricted using smart locks that track all access. 
    * Restricted areas and facilities are locked and when unattended (where feasible).
    * Only authorized workforce members receive access to restricted areas (as determined by the Chief Security Officer).
    * The CSO or authorized delegate shall review the physical access list and authorization credentials periodically but no less than quarterly; and removes individuals from the facility access list when access is no longer required
    * Electronic and physical access and keys shall be revoked upon termination of workforce members.
    * Workforce members must report a lost and/or stolen key(s) to the Chief Security Officer.
    * The Chief Security Officer or authorized delegate facilitates the changing of physical lock(s) within 7 days of a key being reported lost/stolen. 
* Enforcement of Facility Access
    * Workforce members are required to immediately report violations of this policy to the Chief Security Officer.
    * Workforce members in violation of this policy are subject to disciplinary action, up to and including termination.

Datica will review subcontractors compliance certifications annually to ensure that mandatory security requirements are enforced.

## Policy Management Policy

Applicable Standards from the HITRUST Common Security Framework:

* 04.b Review of the Information Security Policy
* 10.b Input Data Validation

## Risk Management Policy

Applicable Standards from the HITRUST Common Security Framework:

* 00.a Information Security Management Program
* 02.d Management Responsibilities
* 03.b Performing Risk Assessments
* 03.c Risk Mitigation
* 03.d Risk Evaluation
* 04.b Review of the Information Security Policy
* 05.a Management Commitment to Information Security
* 05.h Independent Review of Information Security
* 06.g Compliance with Security Policies and Standards
* 09.s Information Exchange Policies and Procedures
* 10.a Security Requirements Analysis and Specification
* 10.h Control of Operational Software

## System Development Lifecycle Policy

Applicable Standards from the HITRUST Common Security Framework:

* 10.a Security Requirements Analysis and Specification

## System Security Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.m Segregation in Networks
* 01.n Network Connection Control
* 01.o Network Routing Control
* 01.t Session Time-out
* 01.v Information Access Restriction
* 06.d Data Protection and Privacy of Covered Information
* 09.j Controls Against Malicious Code
* 09.k Controls Against Mobile Code
* 09.m Network Controls
* 09.s Information Exchange Policies and Procedures
* 10.b Input Data Validation
* 10.f Policy on the Use of Cryptographic Controls
* 10.h Control of Operational Software

## Third Party Vendors and Due Diligence Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.l Remote Diagnostic and Configuration Port Protection
* 05.i Identification of Risks Related to External Parties
* 05.j Addressing Security When Dealing with Customers
* 05.k Addressing Security in Third Party Agreements
* 08.b Physical Entry Controls
* 08.d Protecting Against External and Environmental Threats
* 08.j Equipment Maintenance
* 09.e Service Delivery
* 09.f Monitoring and Review of Third Party Services
* 09.m Network Controls
* 09.n Security of Network Services
* 09.p Disposal of Media
* 09.s Information Exchange Policies and Procedures
* 10.a Security Requirements Analysis and Specification
* 10.h Control of Operational Software
* 10.l Outsourced Software Development

## Tools Policy

Applicable Standards from the HITRUST Common Security Framework:

* 09.v Electronic Messaging
* 10.a Security Requirements Analysis and Specification

## Training and Awareness Policy

Applicable Standards from the HITRUST Common Security Framework:

* 01.y Teleworking
* 02.a Roles and Responsibilities
* 02.e Information Security Awareness, Education, and Training
* 02.f Disciplinary Process
* 04.a Information Security Policy Document
* 05.a Management Commitment to Information Security
* 07.c Acceptable Use of Assets
* 09.j Controls Against Malicious Code
* 09.s Information Exchange Policies and Procedures

## Vulnerability Management Policy

Applicable Standards from the HITRUST Common Security Framework:

* 06.h Technical Compliance Checking
* 10.b Input Data Validation
* 10.m Control of Technical Vulnerabilities

## Compliance

Violations of this standard and its procedures by employees may result in disciplinary action, up to and including termination of employment. Violation of this standard and procedures by others, including business associates and workforce members may result in termination of the relationship and/or associated privileges. Violation may also result in civil and criminal penalties as determined by federal and state laws and regulations. Datica reserves the right to notify law enforcement authorities of any unlawful activity and to cooperate in any investigation of such activity.

Datica does not consider conduct in violation of this policy to be within a workforce member’s, business associate’s, or partner’s course and scope of employment or partnership, or the direct consequence of the discharge of the employee’s or partner’s duties. Accordingly, to the extent permitted by law, Datica reserves the right not to defend or pay any damages awarded against employees or partners that result from violation of this policy.

If an employee, workforce member, business associate, or partner believes he or she has been requested to undertake an activity which he or she believes is in violation of this policy, he or she must provide a written or verbal complaint to the Human Resources Manager or any manager as soon as possible.

## Version Tracking

<table>
  <tr>
    <td>Version Number</td>
    <td>Approval Date</td>
    <td>Summary of Changes</td>
  </tr>
  <tr>
    <td>2019-v1.0</td>
    <td>8/30/2019</td>
    <td>Original - Effective</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

