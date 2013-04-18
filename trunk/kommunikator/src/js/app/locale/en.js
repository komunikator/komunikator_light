if (window['DIGT'] == undefined)
    app = {};
app.msg = {
    auth_title: 'D&T PBX authorization',
    login: 'Login',
    password: 'Password',
    error: 'Error',
    fail_load: 'Fail load',
    auth_failed: 'Authentication failed',
    session_failed: 'Your session has expired. Please log in again',
    OK: 'OK',
    logout: 'logout',
    home: 'Home',
    attendant: 'Auto Attendant',
    select_prompt: 'Select prompt',
    upload: 'Upload',
    choose_file: 'Choose file',
    download: 'download',
    wav_file_type: 'Audio file format should be MP3',
    call_logs: 'Call logs',
    extensions: 'Extensions',
    dial_plans: 'Dial plans',
    users: 'Account management',
    time: 'Time',
    status: 'Status',
    duration: 'Duration',
    groups: 'Groups',
    user: 'User',
    total: 'Total',
    gateways: 'Gateways',
    changepassword: 'Change password',
    add: 'Add',
    'delete': 'Delete',
    delete_record: 'Remove {0} record(s)?',
    refresh: 'Refresh',
    online: 'Online',
    offline: 'Offline',
    unregistered: 'Unregistered',
    registered: 'Registered',
    busy: 'Busy',
    previous: 'Previous',
    next: 'Next',
    routing_rules: 'Routing rules',
    conferences: 'Conferences',
    param: 'Parameter',
    value: 'Value',
    description: 'Description',
    music_on_hold: 'Music on hold',
    playlist: 'Playlist',
    file: 'File',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
    notselected: 'Not selected',
    prompts: 'Prompts',
    keys: 'Keys',
    timeframes: 'Schedule work',
    pbx_status: 'PBX status',
    day: 'Day',
    key: 'Key',
    routing: 'Routing',
    destination: 'Destination',
    default_dest: 'Default destination',
    start_hour: 'Start time',
    end_hour: 'End time',
    extension: 'Extension',
    firstname: 'Firstname',
    lastname: 'Lastname',
    group: 'Group',
    address: 'Address',
    directory: 'Directories',
    address_book: 'Address book',
    settings: 'Settings',
    notification_settings: 'Notification Settings',
    short_name: 'Short name',
    name: 'Name',
    number: 'Number',
    in_use: 'In use',
    'caller': 'Caller',
    called: 'Called',
    username: 'User name',
    conference: 'Conference',
    participants: 'Participants',
    enabled: 'Enabled',
    protocol: 'Protocol',
    server: 'Server',
    authname: 'Auth Name',
    domain: 'Domain',
    dial_plan: 'Dial plan',
    priority: 'Priority',
    prefix: 'Prefix',
    did: 'DID',
    voicemail: 'Voice mail',
    update: 'Update',
    update_not_found: 'Updates not found ',
    update_install: 'Found update. Install the update',
    update_success: 'Update has been successfully installed!',
    wait_update: "Please wait while install the update",
    advanced: 'Advanced setting',
    checkforupdates: 'Check for updates?',
    day_total_calls: 'Total calls per day',
    active_calls: 'Active calls',
    active_gateways: 'Active gateways',
    cpu_use: 'CPU usage',
    mem_use: 'Physical memory',
    swap_use: 'Virtual memory',
    space_use: 'Free disk space',
    uptime: 'Server uptime',
    copyright: 'Телефонные системы®PBX © 2012',
    //first_step  : "The first step for setting it is to upload the two prompts for online/offline mode. The prompts may vary depending on your company's business hours."
    for_edit: "To change the settings, click on the desired item twice",
    extensions_info: "Extensions - Internal phones attached to the IP PBX",
    groups_info: "Groups - organise extensions in groups, in order to use the call hunting and queues functionality",
    prompts_info: "The Auto Attendant has two states: online and offline.<br>Each of these states has its own prompt",
    keys_info: "If your online prompt says: Press 1 for Sales, then you must select type: online, key: 1, and insert group: Sales (you must have Sales defined in the Groups section). Same for offline state." +
            "<br><br>If you want to send a call directly to an extension or another number, you should insert the number in the Destination field from Define Keys section.",
    timeframes_info: "When scheduling the Auto Attendant you set the time frames for each day during which ATT will be online. For periods not included in this time frames the offline mode will be used.",
    routing_rules_info: "DIDs - A call can go directly to a phone from inside the FreeSentral, by defining the destination as a DID. The destination can be an extension, a group of extensions, a voicemail, etc.",
    address_book_info: "In the address book are aliases for all telephone numbers (incoming and outgoing). You can add and modify them.",
    dial_plans_info: "Dial Plan: to define a dial plan means to make the connection between a call and a gateway. You have the option to direct calls of your choice to go to a specified gateway.",
    conferences_info: "Conferences - use the number associated with each room to connect to the active conference room.",
    gateways_info: "Gateway: the connection to another FreeSentral, other PBX or network. It is the address you choose your call to go to.",
    music_on_hold_info: "Music on hold - The caller on hold can hear music while waiting to be picked-up. After uploading songs, you can define playlists and set the one to be used.",
    playlist_info: "You can select playlist here.",
    call_logs_info: "This page shows the PBX call log.",
    active_calls_info: "On this screen, in real time displays all active calls on the PBX.",
    users_info: "Use this tab to manage the users of the system. If possible, use strong passwords.",
    performing_actions: "Performing Actions",
    wait_reboot: "Please wait while PBX rebooting",
    wait_checkforupdates: "Please wait while checking for PBX updates",
    reboot_pbx_question	: "Restart PBX?",
    reboot_pbx		: "Restart PBX",
    forward		: 'Forward',
    forward_busy	: 'Busy',
    forward_noanswer	: 'No Answer',
    noanswer_timeout	: 'Timeout (sec)',
    request_terminated	: 'request terminated',
    busy_here		: 'busy here',
    transfer		: "transfer",	
    temporarily_unavailable : "unavailable",
    always		: 'Always',
    network_settings	: 'Network settings',	
    auto_dhcp		: 'Auto DHCP',
    static_ip		: 'Static IP address',
    ip_address		: 'IP address',
    netmask             : 'Mask',
    gateway		: 'Gateway',
    save		: 'Save',			
    invalid_ip_address  : 'Invalid IP Address',
    invalid_netmask	: 'Invalid Network Mask',
    error_updated 	: 'Error updating',
    updated		: 'Updated',
    mail_settings       : 'EMail notifications',
    mailevents          : 'Mailing events',
    mailevent_incoming_gate : 'Incoming call (with indicating the gateway)*',
    mailevent_incoming: 'Incoming call',
    mailevent_outgoing: 'Outgoing call',
    mailevent_internal: 'Internal call',
    email: 'E-Mail to',
    mail1: 'Message text',
    mail2: '* Message text for incoming calls with indicating the gateway',
    invalid_email: 'Invalid E-Mail address',
    mail_subject: 'Subject of',
    mail_nofications: 'E-Mail notifications',
    mail_incoming_subject: '...an incoming call',
    mail_outgoing_subject_call_not_accepted: '...missed outgoing call',
    mail_outgoing_subject_fax_not_accepted: '...missed outgoing fax',
    mail_outgoing_subject_call_accepted: '...successful outgoing call',
    mail_outgoing_subject_fax_accepted: '...successful outgoing fax',
    from: 'From',
    fromname: 'Sender\'s name',
    service_unavailable: 'service unavailable ',
    dropped: 'dropped',
    forbidden: 'forbidden',
    divert_busy: 'call divert',
    not_acceptable: 'not acceptable number',
    divert_noanswer: 'no answer',
    not_found: 'not found',
    progressing:'progressing'
};