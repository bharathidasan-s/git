import { Injectable } from '@angular/core';

@Injectable()
export class XmsconstantsService {

  constructor() { }

  // Generic regular expressions for validation. These are intended mainly for
  // fields that we define in our applications, rather than applying to more universal
  // values like domain names.
  // NOTE: Do not use global flags in const versions, because it will internally set
  // a lastIndex property that may cause subsequent test() to fail.  Just use these to find first hit.
  RE_RESTRICTED_PUNCTUATION: RegExp = /[\^!@#$%\(\)&\*\+=\[\]:;\/\x22\x27<>{},\?|\\]+/;
  RE_RESTRICTED_XML: RegExp = /[&<>%]+/;

  // unicode symbols
  // IMPORTANT:   You may need to set the font family to Arial for any control using unicode because
  // it may not be covered by the embedded font....
  SYM_COPYRIGHT: String = "\u00A9";
  SYM_REG: String = "\u00AE";
  SYM_TM: String = "\u2122";
  SYM_DEGREES: String = "\u00B0";
  SYM_CHECK: String = "\u2713";
  SYM_TRIANGULAR_BULLET: String = "\u2023";
  SYM_ROUND_BULLET: String = "\u2022";

  //-------------------------------------//
  // Colors
  //-------------------------------------//
  STATUSTEXT_SUCCESS: number = 0x35DC17;
  STATUSTEXT_WARN: number = 0xDCC14B;
  STATUSTEXT_CRIT: number = 0xFF151E;

  COLOR_SUCCESS_TEXT: number = 0x268C17;
  COLOR_SUCCESS_TEXT_STR: String = "#268C17";
  COLOR_FAIL_TEXT: number = 0xFF0000;
  COLOR_FAIL_TEXT_STR: String = "#FF0000";
  COLOR_NEUTRAL_TEXT: number = 0xa0a0a0;
  COLOR_NEUTRAL_TEXT_STR: String = "#a0a0a0";

  HEALTH_GOOD_BACKGROUND: number = 0xC2EFC2;
  HEALTH_WARN_BACKGROUND: number = 0xD8DF8C;
  HEALTH_CRIT_BACKGROUND: number = 0xE7B2B2;
  HEALTH_UNKNOWN_BACKGROUND: number = 0x959696;
  HEALTH_INVALID_BACKGROUND: number = 0x959696;
  HEALTH_NONRECOV_BACKGROUND: number = 0xD74646;
  HEALTH_UPDATEMODE_BACKGROUND: number = 0xD0D4EB;

  //-------------------------------------//
  //DEVICE TYPES
  //-------------------------------------//

  // DEPRECATED IN XMS2.0 - DO NOT USE THESE IN XMS2.0
  DEVTYPE_UNKNOWN: number = 0;   // unknown here really means *unauthenticated*
  DEVTYPE_CHASSIS: number = 1;
  DEVTYPE_BLADE: number = 2;
  DEVTYPE_MONOLITHIC: number = 3;
  DEVTYPE_STORAGEMODULE: number = 4;
  DEVTYPE_SWITCH: number = 5;
  DEVTYPE_SHELFMANAGER: number = 6;
  DEVTYPE_POWERMODULE: number = 7;
  DEVTYPE_COOLINGMODULE: number = 8;
  // END DEPRECATED

  // Special (internal) device types.
  // Shown when no devices are present.
  DEVTYPE_WELCOMESCREEN: number = 500;
  DEVTYPE_UNSUPPORTED: number = 501;			// A device that is not supported by the current set of gui plugins
  DEVTYPE_XMSSTARTUP: number = 502;
  DEVTYPE_SEARCH: number = 506;			// The default search view when nothing is selected

  // These are new "device" types that allow the UI to switch to the views
  // created by the new nav system and ip management
  DEVTYPE_S0CATEGORYSUMMARIES: number = 507;	// the view when device list is in category list mode
  DEVTYPE_S1MANAGERS: number = 508;				// the view when device list is showing available managers.  Note
  // that the 3rd state (or device management) is the same as clicking the
  // plugin device type, so the view switches to the plugin and its specific default type view

  DEVTYPE_IPMANAGEMENT: number = 509;        // the view when the user wants to manage IPs

  // Application wide constant for max global users in each plugin
  GLOBALUSERCOUNT_MAX: number = 10;


  // Alert destinations
  ALERTDESTINATIONTYPES_GROUPS: number = 0;
  ALERTDESTINATIONTYPES_EMAILS: number = 1;

  ADDRESSBOOK_CHANGETYPE_EMAILADDEDEDITED: number = 0;
  ADDRESSBOOK_CHANGETYPE_EMAILDELETED: number = 1;
  ADDRESSBOOK_CHANGETYPE_GROUPADDEDEDITED: number = 2;
  ADDRESSBOOK_CHANGETYPE_GROUPDELETED: number = 3;


  LICENSETYPE_NONE: number = 0;
  LICENSETYPE_OEM: number = 1;
  LICENSETYPE_ALLOCATED: number = 2;


  // Global health and connection status values, defined and fixed for ALL
  // plugins.  Created 3/25/2010.
  GLOBAL_HEALTHSTAT_UNKNOWN: number = 0;
  GLOBAL_HEALTHSTAT_GOOD: number = 1;
  GLOBAL_HEALTHSTAT_WARN: number = 2;
  GLOBAL_HEALTHSTAT_CRITICAL: number = 3;
  GLOBAL_HEALTHSTAT_NONRECOVERABLE: number = 4;
  GLOBAL_HEALTHSTAT_INFORMATION: number = 5;
  GLOBAL_HEALTHSTAT_UPDATEMODE: number = 6;	// NEW for 3.0
  GLOBAL_HEALTHSTAT_UNLICENSED: number = 8;	// NEW for 3.0
  GLOBAL_HEALTHSTAT_NOTMANAGEABLE: number = 15;	// NEW for 3.0
  GLOBAL_HEALTHSTAT_DONOTASSIGN: number = 9999;
  GLOBAL_HEALTHSTAT_TRAPMASK: number = 0x10;	// bit 4 to indicate trap
  GLOBAL_HEALTHSTAT_STATUSMASK: number = 0xf;	// bits 3-0 to indicate status

  // Task status
  GLOBAL_TASKSTAT_PENDING: number = 0;
  GLOBAL_TASKSTAT_RUNNING: number = 1;
  GLOBAL_TASKSTAT_COMPLETESUCCESS: number = 2;
  GLOBAL_TASKSTAT_COMPLETEFAIL: number = 3;
  GLOBAL_TASKSTAT_COMPLETECANCELED: number = 4;
  GLOBAL_TASKSTAT_DEFERRED: number = 5;
  GLOBAL_TASKSTAT_USER_INPUT_REQUIRED: number = 6;

  REASONCODE_GENERAL: number = 0;
  REASONCODE_USER: number = 1;
  REASONCODE_SECURITY: number = 2;

  REASONSUBCODE_DISCOVERYRANGE: number = 0;
  REASONSUBCODE_FWUPGRADE: number = 1;
  REASONSUBCODE_LOGIN: number = 2;
  REASONSUBCODE_LOGOUT: number = 3;
  REASONSUBCODE_SESSIONEXPIRED: number = 4;
  REASONSUBCODE_SSL: number = 5;
  REASONSUBCODE_USERACCOUNT: number = 6;
  REASONSUBCODE_LOGINFAILURE: number = 7;

  //------------------------------------------------------//
  // Device tab types
  //------------------------------------------------------//
  // define constants for device tabs to know which type has focus
  MODE_DEVICE: number = 0;
  MODE_EVENTS: number = 3;
  MODE_TASKS: number = 4;

  // constants for the messaging tabs
  MESSAGINGTAB_MESSAGING: number = 0;
  MESSAGINGTAB_TASKS: number = 1;
  MESSAGINGTAB_HELP: number = 2;

  BULK_SELECTION_THRESHOLD: number = 5;	// the number of devices beyond which I consider to be "bulk" operations/menus

  // Ignore types for IP management
  IPMANAGEMENT_IGNORETYPE_NOTIGNORED: number = 0;
  IPMANAGEMENT_IGNORETYPE_USERREQUEST: number = 1;
  IPMANAGEMENT_IGNORETYPE_LICENSERESTRICTION: number = 2;
  IPMANAGEMENT_IGNORETYPE_OEMRESTRICTION: number = 3;

  CATEGORYTYPE_BASE: number = 0;
  CATEGORYTYPE_BUILTIN: number = 1;
  CATEGORYTYPE_USER: number = 2;


  //-------------------------------------//
  // Discovery types
  //-------------------------------------//

  DISCOVERY_RMCP: number = 1;

  //----------------------------------------------------------------------------//
  //----------------------------------------------------------------------------//
  // XMIT RPC - CC codes
  // These are potential BASE CC codes returned by any base xmit get or set operation.
  // These constants correspond directly to the cc.def file, and there
  // must be an XMS constant and error message defined for each (errorstrings.xml)
  // You must also add the appropriate error handler in XMSError.as
  //----------------------------------------------------------------------------//
  //----------------------------------------------------------------------------//
  XMIT_SUCCESS: number = 0x00;
  // generic ccs
  XMIT_INVALID_USER: number = 0x01;
  XMIT_INVALID_PASSWORD: number = 0x02;
  XMIT_INSUFFICIENT_PRIVILEGE: number = 0x03;
  XMIT_INVALID_REQUEST: number = 0x04;
  XMIT_INVALID_REQUEST_DATA: number = 0x05;
  XMIT_DATABASE_ERROR: number = 0x06;
  XMIT_SESSION_TIMEOUT: number = 0x07;
  XMIT_NEED_AUTHENTICATION: number = 0x08;
  XMIT_LDAP_SERVER_ERROR: number = 0x09;
  XMIT_LDAP_NOT_CONFIGURED: number = 0x0A;
  XMIT_AUTH_TYPE_NOT_SUPPORTED: number = 0x0B;

  XMIT_XMS_UPGRADE_UNABLE_TO_SAVE_IMAGE: number = 0x0C;
  XMIT_XMS_IMAGE_NOT_FOUND: number = 0x0D;
  XMIT_XMS_FAILED_TO_SET_UPGRADE: number = 0x0E;
  XMIT_XMS_INVALID_TOKEN: number = 0x0F;


  XMIT_XMS_REQUESTTIMEOUT: number = 0x10;		// this is defined internally, not from the backend


  // device ccs
  XMIT_INVALID_DEVICE: number = 0x11;
  XMIT_DEVICE_ALREADY_EXISTS: number = 0x12;

  // Firmware update
  XMIT_FWU_UNABLE_TO_UPDATE: number = 0x14;
  XMIT_FWU_DEVICE_IN_UPDATE_MODE: number = 0x15;
  XMIT_FWU_INVALID_DEVICE_MODE: number = 0x16;
  XMIT_FWU_IMAGE_NOT_AVAILABLE: number = 0x17;
  XMIT_FWU_STATUS_NOT_AVAILABLE: number = 0x18;
  XMIT_FWU_UNABLE_TO_SAVE_IMAGE: number = 0x19;
  XMIT_FWU_INVALID_IMAGE: number = 0xF19;
  //
  XMIT_STATUS_NO_EVENTS_FOUND: number = 0x1A;
  XMIT_STATUS_UNKNOWN: number = 0x1B;

  // xms user ccs
  XMIT_USER_DOES_NOT_EXIST: number = 0x21;
  XMIT_USER_ALREADY_EXISTS: number = 0x22;
  XMIT_USER_DISABLED: number = 0x23;
  XMIT_LAST_ADMIN_USER: number = 0x24;

  XMIT_NODE_NOT_FOUND: number = 0x30;
  XMIT_PARENT_NOT_FOUND: number = 0x31;
  XMIT_GROUP_ALREADY_EXISTS: number = 0x32;


  XMIT_RECIPIENT_ALREADY_EXISTS: number = 0x33;

  XMIT_LICENSE_EXHAUSTION: number = 0x40;
  // Hackorz!
  // (no need for xmserror support for this, it's a gui-locking error)
  XMIT_LICENSE_BREACH: number = 0x41;

  XMIT_LICENSE_CORRUPTED: number = 0x42;
  XMIT_LICENSE_ALREADY_ACTIVATED: number = 0x43;
  XMIT_LICENSE_ACTIVATION_FAILED: number = 0x44;
  XMIT_LICENSE_ACTIVATE_THRU_MAIL: number = 0x45;
  XMIT_LICENSE_DEMO_EXPIRED: number = 0x46;
  XMIT_LICENSE_UNINSTALL_IN_PROGRESS: number = 0x47;
  XMIT_LICENSE_DEMO_SESSION_EXPIRED: number = 0x48;
  XMIT_LICENSE_DEMO_SESSION_NOT_STARTED: number = 0x49;
  XMIT_LICENSE_HD_ID_NOT_UPDATED: number = 0x4A;
  XMIT_LICENSE_SERVER_COMMUNICATION_FAILED: number = 0x50;
  XMIT_IP_IS_IGNORED: number = 0x51;
  XMIT_IP_IS_OFFLINE: number = 0x52;						// new added 7.12.2012
  XMIT_IP_CANNOT_BE_REACHED: number = 0x53;			// new added 8.6.2012
  XMIT_IP_IS_BUSY: number = 0x54;							// new added 8.6.2012

  XMIT_TASK_INPROGRESS: number = 0x55;							// new in 3.1, added 5.7.2013 for task dev status while task is still running
  XMIT_INVALID_USER_ACTION: number = 0x56;		// added 01-23-2015 as a generic handler for invalid user actions.
  //	Normally UI should block such actions so this is a safety measure.
  // WOL
  XMIT_DEVICE_NOT_IN_SLEEP_STATE: number = 0x60;
  XMIT_DEVICE_INFO_NOT_AVAILABLE: number = 0x61;	// cant find mac
  XMIT_UNABLE_TO_SEND_WOL_COMMAND: number = 0x62;


  XMIT_LDAP_SERVER_CONNECTION_ERROR: number = 0x66;
  XMIT_LDAP_SERVER_BIND_ERROR: number = 0x67;
  XMIT_LDAP_SERVER_SEARCH_ERROR: number = 0x68;
  // configs
  XMIT_NO_CONFIGS_FOUND: number = 0xB1;
  XMIT_SERVER_NOT_CONFIGURED_FOR_SSL: number = 0xB2;
  XMIT_UPLOAD_FILE_READ_ERROR: number = 0xB3;
  XMIT_INVALID_CERTIFICATE_FILE: number = 0xB4;
  XMIT_SERVERPORT_NOT_AVAILABLE: number = 0xB5;
  XMIT_VERSION_UNKNOWN: number = 0xB7;
  XMIT_DB_SIZE_NOT_CONFIGURED: number = 0xB8;
  XMIT_INVALID_FILE_EXT: number = 0xB9;

  XMIT_UNABLE_TO_CHANGE_PORT_SETTINGS: number = 0xBA;

  XMIT_EMAILSERVER_NOTCONFIGURED: number = 0xC6;
  XMIT_SMTPSERVER_CREDENTIALSFAILED: number = 0xC7;
  XMIT_TESTEMAIL_FAILURE: number = 0xC8;

  XMIT_EVT_GATEWAY_NOT_RUNNING: number = 0xD5;
  XMIT_EVT_GATEWAY_COMM_ERROR: number = 0xD6;

  XMIT_FAILED_TO_UPDATE_SCHEDULES: number = 0xEB;	// for invalid schedule

  XMIT_NO_SERVER_CREDENTIALS: number = 0xF1;
  XMIT_RDCB_NOT_AVAILABLE: number = 0xF2;
  XMIT_SAME_TASK_INPROGRESS: number = 0xF3;
  XMIT_DEVICEISNOT_ACTIVENODE: number = 0xF4;
  XMIT_SCHEDULE_SAMEDEVEXISTS: number = 0xF5;
  // SSL errors
  INVALID_SSL_FILES: number = 0xFA;


  // error cc
  XMIT_TERM_SIGNAL_FAILED: number = 0xFB;	// for dns config error
  XMIT_AUTHENTICATION_FAILURE: number = 0xFC;	// generic authentication failure
  XMIT_NO_RESPONSE: number = 0xFD;
  XMIT_UNDEFINED_OPERATION: number = 0xFE;
  XMIT_UNKNOWN_ERROR: number = 0xFF;

  //----------------------------------------------------------------------------//
  //----------------------------------------------------------------------------//
  // END XMIT RPC CODES
  //----------------------------------------------------------------------------//
  //----------------------------------------------------------------------------//



  //-------------------------------------//
  // Validation
  //-------------------------------------//
  VALIDATION_NOERROR: String = "VALIDATION_NOERROR";
  VALIDATION_USERNAME_INVALID: String = "VALIDATION_USERNAME_INVALID";
  VALIDATION_USERNAME_MISSING: String = "VALIDATION_USERNAME_MISSING";
  VALIDATION_USERNAME_SIZE_XMS: String = "VALIDATION_USERNAME_SIZE_XMS";
  VALIDATION_USERNAME_SIZE_IPMI: String = "VALIDATION_USERNAME_SIZE_IPMI";
  VALIDATION_USERNAME_CHARS: String = "VALIDATION_USERNAME_CHARS";
  VALIDATION_PASSWORD_SIZE: String = "VALIDATION_PASSWORD_SIZE";
  VALIDATION_PASSWORD_INVALID: String = "VALIDATION_PASSWORD_INVALID";
  VALIDATION_PASSWORD_MISSING: String = "VALIDATION_PASSWORD_MISSING";
  VALIDATION_PASSWORD_SIZE_XMS: String = "VALIDATION_PASSWORD_SIZE_XMS";
  VALIDATION_PASSWORD_SIZE_IPMI: String = "VALIDATION_PASSWORD_SIZE_IPMI";
  VALIDATION_PASSWORD_CHARS: String = "VALIDATION_PASSWORD_CHARS";
  VALIDATION_DOMAIN_INVALID: String = "VALIDATION_DOMAIN_INVALID";
  VALIDATION_DOMAIN_MISSING: String = "VALIDATION_DOMAIN_MISSING";
  VALIDATION_DOMAIN_CHARS: String = "VALIDATION_DOMAIN_CHARS";
  VALIDATION_DOMAIN_EXT: String = "VALIDATION_DOMAIN_EXT";
  VALIDATION_DOMAIN_LEN: String = "VALIDATION_DOMAIN_LEN";
  VALIDATION_IP_INVALID: String = "VALIDATION_IP_INVALID";
  VALIDATION_FIELD_REQUIRED: String = "VALIDATION_FIELD_REQUIRED";
  VALIDATION_MAC_INVALID: String = "VALIDATION_MAC_INVALID";
  VALIDATION_EMAIL_MISSINGAT: String = "VALIDATION_EMAIL_MISSINGAT";
  VALIDATION_EMAIL_TOOMANYAT: String = "VALIDATION_EMAIL_TOOMANYAT";
  VALIDATION_EMAIL_MISSINGUSER: String = "VALIDATION_EMAIL_MISSINGUSER";
  VALIDATION_EMAIL_INVCHAR: String = "VALIDATION_EMAIL_INVCHAR";
  VALIDATION_EMAIL_INVIPDOMAIN: String = "VALIDATION_EMAIL_INVIPDOMAIN";
  VALIDATION_EMAIL_MISSINGPERINDOMAIN: String = "VALIDATION_EMAIL_MISSINGPERINDOMAIN";
  VALIDATION_EMAIL_INVALIDDOMAIN: String = "VALIDATION_EMAIL_INVALIDDOMAIN";
  VALIDATION_EMAIL_INVALIDPERIODSINDOMAIN: String = "VALIDATION_EMAIL_INVALIDPERIODSINDOMAIN";



  //-------------------------------------//
  // RESET and POWER CONTROLS COMMANDS
  //-------------------------------------//
  RESET_TYPE_COLD: number = 0x1;
  RESET_TYPE_WARM: number = 0x2;

  PWR_STATE_ON: number = 0x1; // power on
  PWR_STATE_OFF: number = 0x2; // mechanical off
  // PWR_STATE_OFF_SOFT:number               = 0x3; // soft off
  // PWR_STATE_SUSPEND_TO_RAM:number         = 0x4; // sleep
  // PWR_STATE_SUSPEND_TO_DISK:number        = 0x5; // hybernate


  //-------------------------------------//
  // Permissions
  //-------------------------------------//

  PERMISSION_NONE: number = 0x00;

  // These are constants for permission levels as defined by the server.
  //DO NOT CHANGE UNLESS PHP CHANGES THE MEANING.
  PERMISSION_RPC_ADMINISTRATOR: number = 0x01;	// SERVER DEFINITION
  PERMISSION_RPC_OPERATOR: number = 0x02;	// SERVER DEFINITION
  PERMISSION_RPC_USER: number = 0x03;	// SERVER DEFINITION
  PERMISSION_RPC_KVMUSER: number = 0x04;	// SERVER DEFINITION

  // Backward compatibility for XMS1.0
  // THESE ARE ONLY FOR XMS1.0
  PERMISSION_BITADMINISTRATOR: number = 0x08;
  PERMISSION_BITOPERATOR: number = 0x04;
  PERMISSION_BITUSER: number = 0x02;
  PERMISSION_BITKVMUSER: number = 0x01;

  //-------------------------------------//
  // XMS Logs
  //-------------------------------------//
  XMSLOGS_TYPE_WEB_SESSION: number = 10;
  XMSLOGS_SUBTYPE_WEB_SESSION_USER_LOGIN: number = 1;
  XMSLOGS_SUBTYPE_WEB_SESSION_USER_LOGOUT: number = 2;
  XMSLOGS_SUBTYPE_WEB_SESSION_SESSION_TIMEOUT: number = 3;
  XMSLOGS_SUBTYPE_WEB_SESSION_USER_LOGIN_FAILURE: number = 4;

  XMSLOGS_TYPE_DEVICE: number = 11;
  XMSLOGS_SUBTYPE_DEVICE_ADD: number = 1;
  XMSLOGS_SUBTYPE_DEVICE_IGNORE: number = 2;

  XMSLOGS_TYPE_CONFIG: number = 12;
  XMSLOGS_SUBTYPE_DEVICE_CONFIG_DISCOVERY: number = 1;
  XMSLOGS_SUBTYPE_DEVICE_CONFIG_DAEMON_CONTROL: number = 2;
  XMSLOGS_SUBTYPE_DEVICE_CONFIG_POLLING_INTVL: number = 3;
  XMSLOGS_SUBTYPE_DEVICE_CONFIG_KVM_URL: number = 4;

  XMSLOGS_TYPE_LIVE_DATA: number = 13;
  XMSLOGS_SUBTYPE_LIVE_DATA_SENSOR: number = 1;
  XMSLOGS_SUBTYPE_LIVE_DATA_EVENT_LOG: number = 2;

  //-------------------------------------//
  // XMS20 Additions
  //-------------------------------------//

  // Actions for setting up controls based on permission
  CONTROLACTION_DISABLEANDHIDE: number = 0;
  CONTROLACTION_DISABLE: number = 1;
  CONTROLACTION_ENABLEDANDSHOW: number = 2;
  CONTROLACTION_ENABLE: number = 3;

  // XMS2.0 Permission Constants
  ROLE_MASKPOS_ADMIN: number = 0x0;
  ROLE_MASKPOS_OPERATOR: number = 0x4;
  ROLE_MASKPOS_USER: number = 0x8;
  ROLE_MASKPOS_KVM: number = 0xC;

  // bits in each nibble of the 16 bit role value
  ROLE_BITMASK_READ_ACCESS: number = 0x1;
  ROLE_BITMASK_WRITE_ACCESS: number = 0x2;
  ROLE_BITMASK_FULLRW_ACCESS: number = this.ROLE_BITMASK_READ_ACCESS | this.ROLE_BITMASK_WRITE_ACCESS;	// for convenience
  // ROLE_MASK_FUTURE1     :number     =0x4;
  // ROLE_MASK_FUTURE2     :number     =0x8;



  //------------------------------------------------------//
  // Global Cause Codes
  //------------------------------------------------------//
  CAUSECODE_START: number = 0x0;
  CAUSECODE_STOP: number = 0x1;
  CAUSECODE_PAUSE: number = 0x2;
  CAUSECODE_RESUME: number = 0x3;
  CAUSECODE_THRESHOLD: number = 0x4;
  CAUSECODE_OPEN: number = 0x5;
  CAUSECODE_CLOSE: number = 0x6;
  CAUSECODE_VALUEMOD: number = 0x7;
  CAUSECODE_RUNNING: number = 0x8;
  CAUSECODE_COMPLETE: number = 0x9;
  CAUSECODE_FAILED: number = 0xa;
  CAUSECODE_SUCCEEDED: number = 0xb;
  CAUSECODE_ADDED: number = 0xc;
  CAUSECODE_REMOVED: number = 0xd;
  CAUSECODE_IGNORED: number = 0xe;
  CAUSECODE_RESTARTED: number = 0xf;


  // Command issuer keys for global refresh.  Right now there are two types of
  // keys (reasons).  These consts are used to index the appropriate key
  // in the global data array commandIssuerKey[].
  COMMANDISSUERKEY_IGNORE: String = "ignore";
  COMMANDISSUERKEY_LICENSING: String = "licensing";


  // Fixed plugin component types that may be requested by the base
  PLUGINCOMPONENTTYPE_SNMPALERT: String = "PLUGINCOMPONENTTYPE_SNMPALERT";			// snmp alert form
  PLUGINCOMPONENTTYPE_SNMPLOG: String = "PLUGINCOMPONENTTYPE_SNMPLOG";				// snmp log form
  PLUGINCOMPONENTTYPE_PROTOCOLFORM: String = "PLUGINCOMPONENTTYPE_PROTOCOLFORM";	// protocol config forms
  PLUGINCOMPONENTTYPE_TASKTOOL: String = "PLUGINCOMPONENTTYPE_TASKTOOL";			// task or tool components/pages
  PLUGINCOMPONENTTYPE_REPORTFORM: String = "PLUGINCOMPONENTTYPE_REPORTFORM";		// extra options for reports (optional)

  //breadcrumb ids, normal component (category) ids are defined in XMSDeviceListEvent


  //------------------------------------------------------//
  // Breadcrumb ids:  Component view
  //------------------------------------------------------//

  BREADCRUMB_IDS_COMPONENT_BASE: String = "BREADCRUMB_IDS_COMPONENT_BASE";
  BREADCRUMB_IDS_COMPONENT_BASE_COMPLIST: String = "BREADCRUMB_IDS_COMPONENT_BASE_COMPLIST";
  BREADCRUMB_IDS_COMPONENT_BASE_COMPLIST_ASSOC: String = "BREADCRUMB_IDS_COMPONENT_BASE_COMPLIST_ASSOC";

  //------------------------------------------------------//
  // Breadcrumb ids:  Events view
  //------------------------------------------------------//
  BREADCRUMB_IDS_EVENTSBASE: String = "BREADCRUMB_IDS_EVENTSBASE";
  BREADCRUMB_IDS_EVENTSBASE_FILTER: String = "BREADCRUMB_IDS_EVENTSBASE_FILTER";

  //------------------------------------------------------//
  // Breadcrumb ids:  Task view
  //------------------------------------------------------//
  BREADCRUMB_IDS_TASK_BASE: String = "BREADCRUMB_IDS_TASK_BASE";
  BREADCRUMB_IDS_TASK_BASE_ITEM: String = "BREADCRUMB_IDS_TASK_BASE_ITEM";


  STATUSICONSIZE_TINY: number = 0;		// 14x14 typical
  STATUSICONSIZE_SMALL: number = 1; 	// 16x16 typical
  STATUSICONSIZE_MED: number = 2;      	// 20x20 typical
  STATUSICONSIZE_LARGE: number = 3;    // 28x28 typical

  ADUSERTYPE_USERS: String = "users";
  ADUSERTYPE_GROUPS: String = "groups";
  ADUSERTYPE_BOTH: String = "both";
}