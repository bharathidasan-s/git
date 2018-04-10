//;*****************************************************************;
//;*****************************************************************;
//;**                                                             **;
//;**           (C) COPYRIGHT American Megatrends Inc.            **;
//;**                     ALL RIGHTS RESERVED                     **;
//;**                                                             **;
//;**  This computer software, including display screens and      **;
//;**  all related materials, are confidential and the            **;
//;**  exclusive property of American Megatrends, Inc.  They      **;
//;**  are available for limited use, but only pursuant to        **;
//;**  a written license agreement distributed with this          **;
//;**  computer software.  This computer software, including      **;
//;**  display screens and all related materials, shall not be    **;
//;**  copied, reproduced, published or distributed, in whole     **;
//;**  or in part, in any medium, by any means, for any           **;
//;**  purpose without the express written consent of American    **;
//;**  Megatrends, Inc.                                           **;
//;**                                                             **;
//;**                                                             **;
//;**                American Megatrends, Inc.                    **;
//;**           5555 Oakbook Parkway, Building 200        	      **;
//;**     Norcross,  Georgia - 30071, USA. Phone-(770)-246-8600.  **;
//;**                                                             **;
//;*****************************************************************;
//;*****************************************************************;
'use strict';

class XMSData {
    /**
    * Contents of the /info call in the very early stages of application init
    * (preinit)
    */
    static xmlInfo: any;//XML;

    /** List of supported languages */
    static supportedLanguages: Array<any> = [];//new Array();
    /** The current language for all strings */
    static currentLanguage: String = "";
    static href: String = "";
    /** This is a copy of the XMS shared object (flash cookie)
     * Properties as of 2/12/13
     * devlist_showlabels
     * devlist_showtooltips
     * mw_enable
     * mw_outDebug
     * mw_outSocket
     * mw_outUI
     * mw_size
     * show_welcome
     * usersettings
     * */
    static XMSSOSettings: Object = {};
    /** The preferences set by the user and stored on the client inside the app shared object (flash cookie)
     * Format is tokenized by "property=setting&property2=setting2" ,etc
     * This is the same as XMSSOSettings.usersettings
     *
     * */
    static userLocalPrefs: String = "";



    /** The instance of the current user.
     * Don't cast this here as any particular User type so
     * I can use it generically if the user class changes.
     * For example, this is User for XMS1.0 and User20 for XMS2.0.
     * I suppose I should create an interface for it, but I don't
     * expect anyone needs to worry about this but me.
     * BrandonB
     */
    static currentUser: any;

    static currentMenuName: String = "";

    static logoutOK: Boolean = false;	// set to true when logged out

    /** This is the dynamically changing device type for the
     *  currently selected device in the list. Since you
     *  should not be able to select dissimilar devices,
     *  this should apply to single or multiple selections.  IMPORTANT NOTE: with
     *  XMS2.0 you must use the combination of selectedDeviceType and
     *  selectedDevicePluginID in order to determine a device change, since
     *  plugins can have common type numbers. */
    static selectedDeviceType: number = XMSConstants.DEVTYPE_XMSSTARTUP;
    static selectedDevicePluginID: String = "";

    static selectedDeviceLength: number = 0;

    /**
    * Globally accessible array of the selected nodes from the device tree.
    * In 3.0 - this is used to store the list of selected devices from the last
    * state (the subdevice epids).  This is also done to maintain
    * backward compatibility.
    *
    */
    static selectedDeviceItems: Array<any>;


    /** This is the device type for the currently active
     *  menu/view.  It allows me to check the current
     *  view settings (menu bar) so that I can keep it
     *  the same if clicking another device of the same
     *  type.  This device MUST default to something other
     *  than an actual device type to ensure the handlers
     *  fire on application startup. */
    static activeDeviceType: number = XMSConstants.DEVTYPE_XMSSTARTUP;

    /** An array of the currently selected device ids.  This particular let
     *  should not be used for binding.  If you need to set a watch, bind to
     *  the selectedDeviceListStr variable.  That is the string version of
     *  this array, and since it represents a single string value for all
     *  selected device ids it is more suitable for binding.
     *
     * For 3.0, this will contain the list of subdevice epids
     * as selected from the last device state (s2).
     *
     *   */
    static selectedDeviceList: Array<any> = [];

    /** This is a copy of the device list as constructed from
     *  the raw PHP data and used as the data provider for the
     *  device tree
     *
     * For 3.0, this will contain a constructed xml list of
     * devices that is backward compatible with 2.0.  This list
     * is created dynamically when the user gets to the last
     * device tree state and chooses a device type manager.
     *
     * */
    ////	static xmlDeviceList:XML=<root/>;

    //	static xmlUserGroupList:XML=<root/>;
    /** This is the number of devices in the tree
     * */
    static numDevices: number = 0;

    /**
     * The number of ignored devices in the ignored list
     *
     */
    static numIgnoredDevices: number = 0;

    /**
     * The XML structure for the currently visible/active menu.
     * This structure is updated dynamically as devices are changed,
     * and is the dataprovider for the main menu bar.
     */
    static xmlCurrentMenu: any;//XMLList;

    /**
    * Bindable target for status bar text
    */
    static statusBarText: String = "";

    /**
     * Holds settings.xml file information.  This is a combination
     * of the default file and the oem file.
    */
    static settings: any;//XML;
    /**
     * Holds the default XMS settings file (for reference)
     */
    static defaultsettings: any;//XML;
    /**
    * Holds the OEM settings file (for reference)
    */
    static oemsettings: any;//XML;

    /**
    * Holds smsettings.xml file information
    */
    static smsettings: any;//XML;
    /**
    * Global settings found only in default settings file, under developer
    */
    static dataserver: String = "";

    /**
     * Indicator for offline mode
     */
    static offline: Boolean = false;
    /**
     * Indicator to skip login when in offline mode
     */
    static skiplogin: Boolean = false;

    /**
    * Name of the current view
    */
    static currentViewName: String = "";

    /**
    * Boolean for session expiration
    */
    static sessionexpired: Boolean = false;

    /**
     * Indicator for debug mode
     *
     */
    static debugMode: Boolean = false;
    static debugLogo: Boolean = false;

    /**
    * The OEM name as given by the XMS server during the /info call
    * from language.as.  This string is used as a literal path to
    * retrieve branding graphics, oem settings, etc.
    */
    static oemname: String = "";
    /**
     * The product line for this instance of the gui.  For ami products,
     * this will be "ami".
    */
    static productline: String = "";
    /**
     * A flag to indicate if this is an OEM or AMI product.  This is
     * set by the <amiproductcode> flag in the /info call.  If 1, then
     * its an AMI product.  If 0 then it's an OEM product.
    */
    static isAMIProduct: Boolean = false;

    /**
     * A flag to indicate if this is an evaluation build, which may have some
     * special or omitted functionality
     */
    static isEvaluation: Boolean = false;


    /** XMS2.0 - An array for ALL supported devices, containing the device name,
     *  small icon and large icons.
     *
     *  Note that this is an associative array indexed by plugin name and type
     *
     *
     *  pluginDeviceList[pluginid][type]=
     * 	{
     *    name:<devicename>,
     *    canbeadded:<0,1 boolean to indicate if this device can be added
     *    				when adding single devices>
     *    canbeignored:<0,1 boolean to indicate if this device can be
     *                  ignored>  DEPRECATED IN 3.0
     *    canbemoved:<0,1 boolean to indicate if this device can be
     *                 removed>   DEPRECATED IN 3.0
     *    canberenamed:<0,1 boolean to indicate if this device can be
     *                  renamed>  DEPRECATED IN 3.0
     *    associateddevices:<0,1 boolean to indicate if this device supports
     *                  associated devices>
    *    }
     *
    *  This array is used to get device labels and icons for all device types,
     *  including the built ins like server, blade etc.
     *   */
    static pluginDeviceList: Array<any> = [];


    /**
     * XMS2.0 - An array of objects pertaining to the plugins.  Each array object
     * contains the plugin name (for loading), the plugin ID, and plugin
     * reference.  The ID and reference are filled in during the init process.
     *
     * plugins[pluginid]={
    *    pluginRef:<Object reference to plugin>
     *    localizedpluginname:<name of plugin>,
     *    pluginViewIndex:<index of this plugin id in the global viewstack>,
     * 	licenseok:0/1	<whether plugin license is ok or not>
           licensedetails:{title:<title>, desc:<desc>, type:type of lock
        event} <object containing title, desc, and type of lock event }
     *
     */
    static plugin: Array<any> = [];


    /**
     * XMS2.0
     * An array that maps the plugin ID to its view index
     * in the viewstack
     *
     * pluginViewIndex[pluginid]=x, where x is the viewstack index
     *
     */
    static pluginViewIndex: Array<any> = [];

    /**
     * XMS2.0
     * Total number of extension plugins, not counting the base view
     */
    static pluginTotalNumber: number = 0;
    /**
    * XMS2.0
    * Current index of the main viewstack (XMS2.0)
    */
    static currentPluginViewIndex: number = 0;

    /**
    * the plugin id of the owner of the active, visible page
    */
    static currentActivePluginID: String = "base";

    /**
    * The plugin id of the originator of a view.  If a plugin
    * launches a view that has been augmented from another plugin
    * then this will be the id of the originator. In all other
    * cases it is the same as currentActivePluginID.
    * Example:
    * HX has a menu item exposed from BIOSCFG.  When the user clicks
    * this item, currentPluginViewIndex will be switched to BIOSCFG index,
    * currentActivePluginID will be switched to BIOSCFG id, but
    * sourceMenuItemPluginViewID will be HX.
    * For any normal HX menu items, currentActivePluginID and
    * sourceMenuItemPluginViewID will be HX.
     * This static is really important for licensing, so I can disable
     * the plugin content area
    */
    static sourceMenuItemPluginViewID: String = "";

    /**
     * The role value given by the last menu item that was clicked.  Any pages that
     * are subject to permission based read/write should check this value to see if
     * you can enable/show the Save button (menu items should be disabled by
     * default)
     *
     */
    static currentRole: number = 0;



    /**
     * The pluginviewid for the last selected device menu option.  This is critical
     * data as it tells me when to switch the main viewstack to the appropriate
     * plugin.
     *
     */
    static currentMenuItemPluginViewID: String = "";


    static mouseX: number = 0;	// current mouseX position relative to app window
    static mouseY: number = 0;	// current mouseY position relative to app window


    //	static licensingEnabled:int=0;	// are we using licensing

    static lastPollTimestamp: number = 0;	// storage of the timestamp returned from the device list request
    static licensed: Boolean = false;	// flag to indicate running in licensed mode.
    // This is mainly for menu options and other config,
    // it does NOT block license CC codes or disable license locking functions.


    //------------------------------------------------------//
    // 3.0 additions
    //------------------------------------------------------//

    // UI Device Navigation consists of 3 states
    // State0:category list
    // State1:entities from selected category
    // State2:entities that match the selected manager
    //
    // REPURPOSED letS:
    // * xmlDeviceList will contain the complete, original entity list XML.
    // * selectedDeviceItems will contain the entity node list that is selected in the last state (state2).

    // NEW letS
    // Array that contains data for plugin categories - exposes the localized category name
    // and any other info that it needs.  This is an associative array
    // [assetID]={label:xxxx, icon:xxxx, devtype:x}
    // NOTE that this is indexed by assetID ... to map to categoryID you must located catid in xmlCategoryList
    // to get assetID, and then use that

    static pluginCategoryData: Array<any> = [];

    // static currentState: String = XMSDeviceListEvent.STATE_CATEGORYLIST;

    // Stores all categories as given from the php call (may not be needed)
    static xmlCategoryList: any = null;

    // Stores the id of the currently selected category.
    static selectedCategoryID: String = "";

    // This is the master device list, with the xmlDevicelist.entity as the source for collection change events
    static xmlcDeviceList: any;//XMLListCollection = new XMLListCollection();

    // STATE0 - CATEGORY LIST
    // Array of the rendered categories, indexed by cat id:
    //	arCategories[id]={label:<label>, desc:<desc if user defined>, assetid:<addetid if plugin defined>, editable:<editable>};
    static arCategories: Array<any> = [];

    // STATE1 - ENTITY LIST
    // State1 data provider, used for filtering/sorting the entity list as given from the category

    // static xmlcCategoryEntityList:XMLListCollection=new XMLListCollection();
    //static xmlcCategoryEntityList:XMLListCollection=xmlcDeviceList;



    // contains XML informatio for the manager button that the user is hovering over.  Used by the entity list to
    // place the "checkmark" on the devices that support the manager.
    static hoverManage: any;// = <root/>;

    // Stores the list of entity nodes that are selected by the user in State 1 (node manageability).  Used to calculate statistics in state 1,
    // and also to restore the selection when coming from S2 back to S1.  **These are actual referenced nodes.
    static arSelectedCategoryEntities: Array<any> = [];

    // STATE2 - MANAGED ENTITY LIST
    // State2 data provider, used for filtering/sorting the entity list as given from the selected state1 manager.
    // This collection is initialized from the entities that are managed by the chosen plugin.
    // Having a separate data provider like this allows the state1 entity list/selection to stay intact
    //static xmlcManagedDevices:XMLListCollection=new XMLListCollection();
    // Stores the nodes for the devices that are passed from S1 to S2 to be managed.  The actual selected
    // entities are written to the 2.0 compatible selectedDeviceItems
    // static arManagedCategoryEntities:Array=[];

    // Stores the plugin id of the currently selected manager in S2.
    static selectedManagerID: String = "";

    // Stores the device type of the currently selected manager in S2.
    static selectedManagerType: String = "";

    static selectedStatusLockUpdate: Boolean = false;			// indicates to s2 that we are managing only devices in update mode
    //------------------------------------------------------//
    // IP Manager
    //------------------------------------------------------//
    static xmlIPList: any;//XML;	// stores the list of IPs, used as source for XMLListcollection
    static numIPs: number = 0;	// just holds the total number of items reflected in the list - gets updated with filtering too
    static selectedIPItems: Array<any> = [];	// reflects the selected items from the list so the page can update the grid


    static protocols: any;//XMLList;	// loaded protocol mappings


    static laststatusmessage: any;//XML;

    //------------------------------------------------------//
    // Status message update
    //------------------------------------------------------//
    ///static lastupdate:int=0;		// just tracks last update as given from entity list call so status message can pick it up

    // Stores any transaction keys as an associative array that is received from the status message and compared
    // to see if it was issued by THIS client.   Keys are specific and named (see XMSConstants.COMMANDISSUERKEY_xxx)
    static commandIssuerKey: Array<any> = [];

    //------------------------------------------------------//
    //3.1 Additions/changes
    //------------------------------------------------------//

    static previousViewMode: number = XMSConstants.MODE_DEVICE;	// old mode for handlers to use when storing breadcrumb state
    static viewMode: number = XMSConstants.MODE_DEVICE;	// current device tab that has focus

    static xmllTasksTools: any;//XMLList;	// global list of tasks from all plugins, set in processplugins.as
    static numRunningTasks: number = 0;

    // these two lets are updated when user clicks a task, and are mainly used to show the proper help popup
    static selectedTTPluginId: String = "base";
    static selectedTTId: String = "taskMain";

    //------------------------------------------------------//
    // SnapVDI
    //------------------------------------------------------//
    static activeeventfilter: Object = {};

    static xmllcDesktopexplorer: any;//XMLListCollection;

    static alertBannerOpen: Boolean = false;

    static pluginmenus: any;//XML = <root/>;	// added to hold the plugins menu that used to be on the toolbar - now used to create task based config
    // NOTE:  this is a temporary flag for offline demo purposes....
    static alertEvent_FailoverOFFLINESIMULATION: Boolean = false;
    static alertEvent_PhysicalDiskOFFLINESIMULATION: Boolean = false;
    static wizardObj: Object = { 'view': 'desktop', 'data': '', 'id': 0 };
}