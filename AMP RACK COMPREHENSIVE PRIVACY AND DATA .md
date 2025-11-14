

# **AMP RACK COMPREHENSIVE PRIVACY AND DATA TRANSPARENCY POLICY**

## **1\. Introduction, Scope, and Open-Source Commitment**

### **1.1. Policy Purpose, Effective Date, and Data Controller Identity**

This Comprehensive Privacy and Data Transparency Policy ("Policy") establishes the guidelines and procedures governing the collection, processing, usage, and retention of data related to the Amp Rack audio effects processor. Amp Rack is a completely open-source application and LADSPA Plugin Host available across multiple computing environments, including Android, Windows, Linux, and Raspberry Pi.1

The purpose of this Policy is to ensure full compliance with global data protection regulations, including but not limited to the European Union’s General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), by providing users with clear, granular details regarding data handling practices. Given the application’s availability on platforms such as Google Play 3, meticulous disclosure is required regarding the data types collected, the purposes of collection, and the technical measures employed to protect user privacy.

The entity responsible for determining the purposes and means of processing Personal Identifiable Information (PII) collected via the Amp Rack Portal (defined below) acts as the Data Controller. This entity operates the associated web domains and synchronization infrastructure, such as amprack.in and related domains.1 The provisions within this document are based on the premise that Personal Data will be collected for specified, explicit, and legitimate purposes and that appropriate technical and organizational security measures will be used to protect against unauthorized access and processing.6

### **1.2. Commitment to Open Source and Principle of Data Minimization**

The Amp Rack project maintains a fundamental commitment to the principles of open-source transparency. The core application’s source code is publicly accessible on platforms like GitHub 1, allowing the community to audit the code base for any unauthorized or undisclosed data collection or tracking mechanisms.

The overriding principle guiding the architecture of the Amp Rack software is data minimization. The core functionality—the high-performance low-latency native audio processing engine for hosting LADSPA plugins 2—processes highly sensitive information, namely live audio streams, exclusively on the user’s local device. This data is handled transiently in the device’s memory (RAM) and is never recorded, transmitted, or stored on external servers unless the user explicitly initiates a function that requires such action (e.g., saving a file locally or utilizing the external Preset Synchronization Service). This architectural design confirms that the application core does not engage in hidden analytics or constant tracking outside of the user-initiated external services.1

### **1.3. Scope: The Dual Privacy Architecture (The Application vs. The Service)**

Analysis of the Amp Rack feature set reveals a necessary duality in its data processing architecture, requiring two distinct scopes of privacy governance:

1. **Core Application Scope:** This scope covers the application installed locally on Android, Windows, Linux, or Raspberry Pi.1 Processing within this scope relates entirely to the application’s primary function: real-time digital signal processing, hosting plugins, local file saving (audio recordings, video recordings, local presets), and local configuration management. While the Core Application requires access to high-risk system permissions (detailed in Section 5), the data processed is typically Non-Personal Data (NP-Data) and remains confined to the user’s device unless actively exported.  
2. **External Service Scope (Amp Rack Portal/Sync):** This scope governs the interactions with the external web-based infrastructure used for account management, preset sharing, and cross-device synchronization.1 Features such as "Save presets and share with the world\!" and "Sync Presets to PC / Smart Pedal" 1 necessitate network access and the creation of a user account.2 This is the only context in which the application collects and transmits Personal Identifiable Information (PII) to external servers controlled by the Data Controller.

The developer’s transparency declaration on platforms like Google Play indicates that the application *may* collect "Personal info, App activity, and App info and performance".3 This Policy confirms that the collection of "Personal info" is strictly limited to the PII required for the External Service Scope (Section 4), and the collection of "App activity" and "App info and performance" is either anonymized, local, or related specifically to the connection and performance metrics of the External Service interaction, maintaining the integrity of the open-source Core Application.

## **2\. Definitions and Legal Bases for Processing**

### **2.1. Key Definitions**

* **Personal Data (PII):** Any information that relates to an identified or identifiable natural person, either directly or indirectly. For the Amp Rack Portal, this primarily includes unique identifiers associated with account creation, such as the email address used for login.2  
* **Non-Personal Data (NP-Data):** Information that cannot be used to identify a specific individual. This category includes aggregated usage statistics, technical device metrics, transient audio processing data, local preset configuration files, and anonymized performance data.  
* **Processing:** Any operation performed on personal data, such as collection, recording, organization, structuring, storage, retrieval, disclosure, or deletion.6  
* **User-Generated Content (UGC):** Files created directly by the user through the application’s functionality, including recorded audio files (WAV, MP3, Opus), recorded video files, and locally created or saved preset configurations.1

### **2.2. Legal Bases for Data Processing (GDPR/Global Compliance)**

The processing of PII is undertaken only when supported by a valid legal basis, ensuring that the collection practices are adequate, relevant, and not excessive in relation to the purposes for which the data is collected.6

* **Contractual Necessity:** The collection and processing of mandatory PII, such as the user’s email address or unique user ID, is necessary for the performance of the contractual obligation to provide the requested service, specifically the creation and maintenance of an account for Preset Sync and Sharing functionality.6 Without this information, the developer cannot fulfill the service requested by the user.7  
* **Legitimate Interest:** Certain types of NP-Data or non-sensitive technical metadata are processed based on the Data Controller's legitimate interest in maintaining system security, debugging critical synchronization failures, preventing fraudulent activity on the public portal, and ensuring the application’s technical performance ("App info and performance" 3).  
* **User Consent:** Explicit, informed consent is the basis for high-risk processing activities, including the initial granting of dangerous system permissions (e.g., microphone and camera access) and the public disclosure of user-generated content (presets) through the sharing portal.6

## **3\. Data Collection and Processing Activities (The Local Application Core)**

Data processing within the Core Application scope is defined by necessity for the Digital Signal Processing (DSP) functionality, file creation, and maintenance of local user settings.

### **3.1. Category A: Functional Data Processed Locally (Transient and Storage)**

The primary activity of the Amp Rack application involves the manipulation of audio signals. This requires processing sensitive information:

* **Live Audio/MIDI Input Processing:** Data Type: Real-time digital audio stream. As a LADSPA Plugin Host, the application continuously processes audio input (e.g., from a microphone, mic input jack, or USB interface) through its low-latency audio engine.2 This data is processed transiently in the device’s active memory (RAM) and is immediately discarded upon cessation of processing or application closure. The application is designed such that this live input stream is never automatically recorded, transmitted, or cached to permanent storage without explicit user initiation.  
* **Local Preset Settings and Effect Chain Data:** Data Type: Configuration files (XML/JSON). These files store the precise parameters and sequence of the user’s effect chains. Such configuration data is categorized as NP-Data and is stored exclusively on the user’s device filesystem for local recall.  
* **Local Application Crash and Performance Data:** Data Type: System logs, memory dumps. To ensure stability and continuous improvement, aggregated, anonymized data regarding the Core Application's technical function may be collected locally, aligning with the declaration of collecting "App info and performance".3 This data is designed to identify execution errors and performance bottlenecks without containing PII or detailed content of the audio streams being processed.

### **3.2. Category B: User-Generated Content (UGC) Requiring High-Risk Permissions**

The application's ability to create lasting content requires certain sensitive permissions, which are strictly necessary for the advertised features and are not used for undisclosed tracking. These are categorized as dangerous permissions by operating system standards and necessitate runtime user permission grants.8

* **Audio Recording Functionality:** The ability to record processed audio to formats like WAV, MP3, and Opus 1 requires the highly sensitive android.permission.RECORD\_AUDIO permission.9 The justification for this permission is explicitly limited to facilitating the user’s request to capture and save the audio input stream and/or the processed output signal, which is the core utility of an audio effects processor.2  
* **HD Video Recording Functionality:** The feature set of Amp Rack Version 5 includes "HD Video Recording".1 This function requires access to the device’s imaging sensor, necessitating the android.permission.CAMERA permission.9 The requirement for this permission is directly and solely attributable to the video capture feature. The application guarantees that the camera hardware is only activated and that video data is only processed and accessed when the user explicitly initiates the video recording feature. No background imaging or undisclosed transmission of camera data occurs.  
* **Storage Access:** To save all UGC files (audio, video, presets) and install plugins, the application requires local filesystem access.1 On modern Android versions, this involves obtaining runtime access to designated storage areas for application data and user content.

The use of these dangerous permissions is subject to the principle of necessity and proportionality. The permissions are required for the published, user-controlled features, and their scope of data access is limited to the duration required for the user-initiated task.

Core Application Features and Data Flow

| Feature | Required Android Permission | Data Type Processed | Processing Location | Network Transmission? |
| :---- | :---- | :---- | :---- | :---- |
| Real-Time Audio Effects | RECORD\_AUDIO | Live Audio Stream (Transient) | Local CPU/RAM | No |
| Audio File Recording | RECORD\_AUDIO, Storage | WAV, MP3, Opus Files (UGC) | Local Storage | No, unless user initiates share. |
| HD Video Recording | CAMERA, Storage | Live Video Stream (UGC) | Local Storage | No, unless user initiates share. |
| Local Preset Saving | Storage | Preset Configuration (NP-Data) | Local Storage | No |

## **4\. Data Collected for Synchronization and External Services (PII)**

The collection of PII is restricted to users who choose to register for the Amp Rack Portal to enable synchronization and public sharing capabilities.

### **4.1. The Amp Rack Portal Account Creation and Authentication**

The Portal enables users to "Sync Presets to PC / Smart Pedal" and to "Save presets and share with the world\!".1 These functions require a persistent, identifiable user account.

* **Authentication Methods:** Users can create an account by utilizing third-party OAuth providers (e.g., "Sign in with Google") or by signing in directly with an email address.2  
* **Mandatory PII Collection:**  
  * **Email Address:** Collected through the sign-in mechanism (Google OAuth scope or direct input). This address serves as the unique account identifier, necessary for user verification, communication regarding the service, and secure password recovery.6  
  * **Unique User ID:** A system-generated identifier linked to the email address. This ID is used internally to manage preset ownership, ensure synchronization integrity across devices, and attribute publicly shared content.7  
  * **First/Last Name (Inferred):** Depending on the scope granted during Google OAuth or direct sign-up processes, the user’s name may be collected for account personalization and user management.11

This data collection aligns directly with the mandatory disclosure of collecting "Personal info" submitted by the developer to Google Play.3

### **4.2. Preset Metadata and Public Sharing Data**

When a user utilizes the synchronization or sharing functionality, specific data is transmitted and stored on the external service servers:

* **Preset Configuration Data:** The technical files detailing the user's specific effect chain, parameter values, and plugin order are uploaded and stored on the server.1 While the preset configuration itself is typically NP-Data, it becomes linked to the user’s PII through attribution.  
* **Public Attribution:** Users who choose to "share your presets with the world" 7 consent to having their shared configuration associated with their User ID or chosen username on the public portal.4 This attribution is essential for maintaining the integrity and community engagement of the platform, where users have shared over a thousand presets.7 This linking of technical data to a unique identifier is critical to the functionality of the community and requires careful management under data subject rights (Section 8).  
* **Data Retention:** PII and linked preset data are retained for the duration of the user’s account maintenance. Shared presets are retained indefinitely on the public server unless the user specifically requests the deletion of their account or the removal of the specific shared content.

### **4.3. Technical and Security Metadata Collected via the Service**

To ensure service reliability, certain technical data regarding user interaction with the external portal is collected ("App activity, and App info and performance" 3).

* **Service Interaction Logs (App Activity):** This includes technical metadata generated during synchronization attempts, such as timestamps of login and logout, frequency of sync operations, and the device platform (e.g., Android, Windows, Raspberry Pi) attempting the connection.  
* **Network and Security Logs:** Standard server logs, including IP addresses used during portal access and related security information, are collected for fraud detection, debugging the synchronization pipeline, and protecting the security of the services.6 This data is retained short-term and is processed based on legitimate interest.

PII Elements Collected via the Amp Rack Portal

| Data Element | Processing Purpose | Legal Basis | Retention Period |
| :---- | :---- | :---- | :---- |
| Email Address | Account authentication, Identity management for the Portal | Contractual Necessity | Until account deletion |
| Unique User ID (System) | Preset attribution, Cross-device synchronization | Legitimate Interest | Until account deletion |
| Preset Configuration Metadata | Functionality, Public Sharing | Contractual Necessity / User Consent | Until user deletes preset |
| Device Platform/ID (During Sync) | Security, Debugging Sync Functionality | Legitimate Interest | Short-term (e.g., 90 days) |

## **5\. Platform-Specific Access, Permissions, and Compliance**

The cross-platform nature of Amp Rack (Android, Windows, Linux, Raspberry Pi) requires specific consideration of how data is protected in varying security environments.

### **5.1. Android Environment (Focus on Dangerous Permissions)**

The Android operating system requires that applications request access to dangerous permissions at runtime.8 The policy must transparently justify the necessity of each permission to prevent the perception of excessive data access.13

* **Microphone Access (RECORD\_AUDIO):** This is the paramount requirement for the application. The permission is necessary for the application to function as a Guitar/Voice Audio Effects Processor.2 The policy confirms that this permission is used *only* to capture the audio input stream for immediate processing by the LADSPA host engine or for user-initiated recording to file.9  
* **Camera Access (CAMERA):** The necessity of this highly sensitive permission stems solely from the "HD Video Recording" feature.1 This Policy confirms that the application does not access the camera unless the user actively selects and initializes the video recording function. The elevated level of scrutiny regulators apply to the use of the camera permission necessitates this restriction, assuring users that this function is not used for passive surveillance or background collection.10  
* **Storage Access:** Necessary for saving and retrieving user-generated content, including recordings and local presets.1  
* **Network Access (INTERNET):** Required exclusively for connecting to the Amp Rack Portal to perform synchronization and sharing operations.1

Due to recent changes on platforms like Google Play where the comprehensive list of app permissions is no longer easily accessible to users, being replaced by the developer-provided Data Safety declaration 13, this Policy serves as the mandatory, objective documentation detailing the exact use and limitation of every requested permission.3

### **5.2. Desktop, Linux, and Embedded Environments**

Unlike the sandboxed environment of modern Android, the deployment of Amp Rack on Windows, Linux, and Raspberry Pi 1 means that the application operates with greater local system privileges.

* **Local Data Security Responsibility:** The application requires access to the device’s local filesystem for configuration, plugin installation, and saving UGC. For these non-sandboxed systems, the user assumes responsibility for maintaining the overall security of the local machine and operating system against unauthorized access.  
* **Credential Security for Sync:** A critical requirement arises from the feature to "Sync Presets to PC".1 To enable seamless synchronization, access tokens or cached credentials linked to the user’s PII must be stored locally on the PC, Linux, or Raspberry Pi device. The technical implementation of the application utilizes secure storage methodologies (e.g., encryption, restricting file permissions on sensitive credentials) to mitigate the risks associated with storing PII on these heterogeneous systems. Network activity on these desktop and embedded platforms is confined to the synchronization service and essential software updates.

## **6\. Data Sharing, Transfer, and Third Parties**

### **6.1. Third-Party Authentication Providers**

The Amp Rack Portal utilizes third-party providers, such as Google, to facilitate account sign-in.2 When a user chooses to authenticate via an external provider, the application requests minimal PII (typically email address and name) necessary for account establishment. The privacy practices of the external authentication provider (e.g., Google's privacy policy) govern the processing of data they collect during the sign-in process.14 The Data Controller operating the Amp Rack service is not responsible for the privacy practices or content of these external third-party websites or services linked from the application.5

### **6.2. Public Sharing of Presets (User-Initiated Disclosure)**

When a user exercises their right to "share with the world" 1, this action constitutes explicit, affirmative consent to the public disclosure of the preset configuration data and the associated user attribution (username or ID). This sharing makes the preset publicly available to the community.7

This disclosure has profound implications for the user’s data rights, particularly the Right to Erasure. Once a preset has been shared and publicly distributed, other community members may have downloaded or utilized the configuration. While the Data Controller can remove the original user’s PII attribution from the content upon request, it is technically impossible to track and delete all instances of the preset configuration that may have been downloaded or copied by other users prior to the deletion request. Users must understand this inherent limitation before publicly sharing UGC.

### **6.3. Absence of Sale or Sharing for Marketing**

The Data Controller maintains a strict policy: Amp Rack does not sell Personal Information to any third party. Furthermore, Personal Information is not shared with third parties for their independent marketing purposes.14 PII is only shared with third-party vendors or service providers when necessary to complete a transaction (e.g., payment processing, hosting infrastructure) or when required by law, court order, or legal process.6

### **6.4. Cross-Border Data Transfers**

The Amp Rack synchronization and sharing infrastructure may utilize servers or cloud services located outside of the user’s home jurisdiction (e.g., outside the European Union). By using the External Services, the user acknowledges that their PII and preset metadata may be stored and processed in foreign jurisdictions that may not provide the same level of data protection as their home country. Where PII transfer occurs from regulated jurisdictions (such as the EU or UK), the Data Controller employs appropriate safeguards, such as Standard Contractual Clauses (SCCs), to ensure the data remains protected in transit and storage.3

## **7\. Data Security and Integrity**

### **7.1. Technical Security Measures**

The Data Controller employs appropriate technical and organizational security measures to protect PII against unauthorized access, destruction, loss, or alteration.6

* **Encryption in Transit:** All PII communicated between the Core Application or any client (Windows, Linux, etc.) and the Amp Rack Portal for synchronization or authentication is protected via encryption, typically Transport Layer Security (TLS/SSL).3  
* **Security of Stored PII:** PII stored on the Portal servers, including email addresses and system-generated IDs, is protected using industry-standard security practices, including network firewalls, restricted database access, and cryptographic hashing of any sensitive authentication credentials (passwords).

### **7.2. Data Integrity and Accuracy**

The Data Controller strives to ensure that the PII collected is accurate and, where necessary, kept up to date.6 Users bear the primary responsibility for maintaining the accuracy of their account details (e.g., email address, associated username) and are provided mechanisms within the Amp Rack Portal account settings to review and rectify their Personal Data.

## **8\. Data Subject Rights and Control Mechanisms**

Users maintain verifiable rights over their PII collected via the Amp Rack Portal, in accordance with applicable data protection laws.

### **8.1. Right to Access and Rectification**

Data subjects have the right to request confirmation as to whether their PII is being processed and, if so, to obtain access to that PII, along with specific details regarding the purposes of the processing and the categories of data involved.6 Users also maintain the right to have inaccurate or incomplete PII stored on the Portal rectified promptly.

### **8.2. Right to Erasure (The "Right to Be Forgotten")**

The developer has committed to respecting the user's right to delete collected data.3 This right applies specifically to the PII and associated unique identifiers stored on the Amp Rack Portal.

The procedure for exercising the Right to Erasure requires a verifiable request submitted to the Data Controller. Upon successful verification, the deletion process ensures the removal of all associated PII:

1. **Account and Credential Deletion:** The user’s email address, authentication credentials, and unique User ID are permanently removed from the Portal database.  
2. **Synced Preset Deletion:** All preset configurations that were privately synced by the user across their devices are removed from the server.1  
3. **Public Content Decoupling:** For presets that the user previously chose to "share with the world," the user's PII (email, user ID, or personalized attribution) is decoupled and removed from the metadata of that public preset. The actual configuration data of the shared preset may remain on the portal in an anonymized state, without any link back to the deleted account, to maintain community history and service function.7

### **8.3. Right to Object and Restrict Processing**

Users have the right to object to the processing of their PII when that processing is based on legitimate interest (e.g., security monitoring or service diagnostics). Users also have the right to withdraw consent for specific activities, such as the public sharing of a preset, at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.

## **9\. Children's Privacy, Policy Updates, and Contact Information**

The Core Application, while functional for all ages, facilitates the creation of an External Service account which involves the collection of PII (email address).2 Consistent with global regulations, the External Service (Amp Rack Portal) is not directed at or intended for individuals under the age of 16, or the applicable minimum age in the user's jurisdiction for account creation without verifiable parental consent. PII from children knowingly collected through the Portal will be deleted promptly upon discovery.

The Data Controller reserves the right to amend or update this Policy at any time. Users will be notified of any material changes via updates to the Policy documentation and, where required by law, through direct communication regarding changes impacting PII collection or processing practices.

For questions, verifiable requests regarding Personal Data (including access, rectification, or deletion requests), or concerns regarding this Policy, the Data Controller should be contacted using the dedicated channels provided on the official service website.

#### **Works cited**

1. djshaji/amp-rack: Amp Rack is a Guitar / Voice Audio ... \- GitHub, accessed November 14, 2025, [https://github.com/djshaji/amp-rack](https://github.com/djshaji/amp-rack)  
2. Frequently Asked Questions \- Amp Rack, accessed November 14, 2025, [https://amprack.in/faqs.php](https://amprack.in/faqs.php)  
3. Amp Rack Guitar Effects Pedal \- Apps on Google Play, accessed November 14, 2025, [https://play.google.com/store/apps/details?id=com.shajikhan.ladspa.amprack](https://play.google.com/store/apps/details?id=com.shajikhan.ladspa.amprack)  
4. Presets \- Amp Rack, accessed November 14, 2025, [https://amprack.in/view.php?type=Presets\&page=1184](https://amprack.in/view.php?type=Presets&page=1184)  
5. privacy — Acoustix Audio, accessed November 14, 2025, [https://acoustixaudio.com/privacy](https://acoustixaudio.com/privacy)  
6. Amplifier Privacy Policy, accessed November 14, 2025, [https://help.amplifier.com/en/articles/1804382-amplifier-privacy-policy](https://help.amplifier.com/en/articles/1804382-amplifier-privacy-policy)  
7. Amp Rack Guitar Effects Processor for Windows, Linux, Android and Raspberry Pi \- Reddit, accessed November 14, 2025, [https://www.reddit.com/r/audioengineering/comments/1h3bx88/amp\_rack\_guitar\_effects\_processor\_for\_windows/](https://www.reddit.com/r/audioengineering/comments/1h3bx88/amp_rack_guitar_effects_processor_for_windows/)  
8. Android permissions | Android Open Source Project, accessed November 14, 2025, [https://source.android.com/docs/core/permissions](https://source.android.com/docs/core/permissions)  
9. Change app permissions on your Android phone \- Google Play Help, accessed November 14, 2025, [https://support.google.com/googleplay/answer/9431959?hl=en](https://support.google.com/googleplay/answer/9431959?hl=en)  
10. Microphone permission \- android \- Stack Overflow, accessed November 14, 2025, [https://stackoverflow.com/questions/24817849/microphone-permission](https://stackoverflow.com/questions/24817849/microphone-permission)  
11. Create a user in AMP \- Level Access Help Center, accessed November 14, 2025, [https://client.levelaccess.com/hc/en-us/articles/13759085524119-Create-a-user-in-AMP](https://client.levelaccess.com/hc/en-us/articles/13759085524119-Create-a-user-in-AMP)  
12. Presets \- Amp Rack, accessed November 14, 2025, [https://amprack.acoustixaudio.org/view.php?type=Presets\&page=293](https://amprack.acoustixaudio.org/view.php?type=Presets&page=293)  
13. Sadly, we can't check the app permissions on Google Play anymore \- Zero, accessed November 14, 2025, [https://www.bluespace.tech/blog/google-play-permissions-list/](https://www.bluespace.tech/blog/google-play-permissions-list/)  
14. AMP Privacy Policy, accessed November 14, 2025, [https://ampmemberships.com/amp-privacy-policy/](https://ampmemberships.com/amp-privacy-policy/)