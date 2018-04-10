'use strict';

//------------------------------------------------------//
// CC Error codes.  Must be 0x100 or higher.
// import * as plugin_const from "../PluginConstants";
//------------------------------------------------------//
export const CC_USER_NOT_IN_COLLECTION:number  = 0x201;
export const SWUPDATE_USER_ALREADY_ASSIGNED_TO_ANOTHER_VM:number =  0x204;//516
export const CC_VM_TEMPL_DEL_FAILED     :number =  0x160;
export const CC_COLLECTION_MODIFICATION_FAILED :number =  0x15C;
//----- VM Image
export const CC_VM_IN_TEMPLATE_PROGRESS     :number =  0x202;
export const CC_VM_SYSPREP_ALREADY          :number =  0x26B;
export const CC_VM_REQ_REBOOT               :number =  0x26C;
export const CC_HOST_LOGIN_FAILED           :number =  0x27A;
export const CC_VM_LOGIN_FAILED             :number =  0x27B;
export const CC_VM_ISO_MOUNT_FAILED         :number =  0x27C;
export const CC_VM_SYSPREP_FAILED           :number =  0x27D;
export const CC_VM_WINDOWS_UPDATE_FAILED    :number =  0x27E;
export const CC_VM_START_UP_FAILED          :number =  0x27F;
export const CC_INVALID_INPUT_PARAMETERS    :number =  0x280;

export const CC_VM_TEMPLATE_NAME_ALREADY_AVAILABLE :number =  0x281;
export const CC_VM_TEMPLATE_NAME_CANNOT_BE_SAME_AS_VMNAME :number =  0x282;
export const CC_VM_TEMPLATE_IS_ALREADY_USED :number =  0x283;
export const CC_HARDWARE_PROFILENAME_ALREADY_EXIST :number =  0x284;
export const CC_OS_PROFILENAME_ALREADY_EXIST :number =  0x285;
export const CC_DISK_SPACE_NOT_AVAI :number =  0x286;
export const CC_HOST_SERVICE_NOTINSTALLED :number =  0x287;

// ISO Image uploader error codes 
export const CC_ISO_IMAGE_MOUNT_FAILED 				:number =  0x288;
export const CC_ISO_IMAGE_UNMOUNT_FAILED  			:number =  0x289;
export const CC_FAILED_GET_IMAGE_PROPERTIES  		:number =  0x290;
export const CC_ATTEMPT_COPY_IMAGE_REPOSITORY_FAILED :number =  0x291;
export const CC_INVALID_SHARE_CREDENTIAL  			:number =  0x292;
export const CC_OSIMAGE_DISPLAYNAME_NO_AVAILABLE	:number =  0x293;
export const CC_SHARE_NETWORK_PATH_NOT_FOUND	 	:number =  0x294;
export const CC_PHYSICAL_PATH_ACCESS_FAILED	 		:number =  0x295;
export const CC_SHARE_PATH_ACCESS_FAILED	 		:number =  0x296;