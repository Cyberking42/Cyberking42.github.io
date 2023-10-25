const textElement = document.querySelector('.perc');
const texts = ["20% complete", "40% complete", "60% complete", "80% complete", "100% complete"];

let currentIndex = 0;
let intervalId;

function changeText() {
    textElement.textContent = texts[currentIndex];
    if (texts[currentIndex] === "100% complete") {
        clearInterval(intervalId); // Stop the interval when the text is "100% complete"
    }
    currentIndex = (currentIndex + 1) % texts.length;
}

intervalId = setInterval(changeText, 20000); // Change text every 20 seconds


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function () {
    const predefinedTexts = ["Stop code: APC_INDEX_MISMATCH", "Stop code: DEVICE_QUEUE_NOT_BUSY", "Stop code: INVALID_AFFINITY_SET", "Stop code: INVALID_DATA_ACCESS_TRAP", "Stop code: INVALID_PROCESS_ATTACH_ATTEMPT", "Stop code: INVALID_PROCESS_DETACH_ATTEMPT", "Stop code: INVALID_SOFTWARE_INTERRUPT", "Stop code: IRQL_NOT_DISPATCH_LEVEL", "Stop code: IRQL_NOT_GREATER_OR_EQUAL", "Stop code: IRQL_NOT_LESS_OR_EQUAL", "Stop code: NO_EXCEPTION_HANDLING_SUPPORT", "Stop code: MAXIMUM_WAIT_OBJECTS_EXCEEDED", "Stop code: MUTEX_LEVEL_NUMBER_VIOLATION", "Stop code: NO_USER_MODE_CONTEXT", "Stop code: SPIN_LOCK_ALREADY_OWNED", "Stop code: SPIN_LOCK_NOT_OWNED", "Stop code: THREAD_NOT_MUTEX_OWNER", "Stop code: TRAP_CAUSE_UNKNOWN", "Stop code: EMPTY_THREAD_REAPER_LIST", "Stop code: CREATE_DELETE_LOCK_NOT_LOCKED", "Stop code: LAST_CHANCE_CALLED_FROM_KMODE", "Stop code: CID_HANDLE_CREATION", "Stop code: CID_HANDLE_DELETION", "Stop code: REFERENCE_BY_POINTER", "Stop code: BAD_POOL_HEADER", "Stop code: MEMORY_MANAGEMENT", "Stop code: PFN_SHARE_COUNT", "Stop code: PFN_REFERENCE_COUNT", "Stop code: NO_SPIN_LOCK_AVAILABLE", "Stop code: KMODE_EXCEPTION_NOT_HANDLED", "Stop code: SHARED_RESOURCE_CONV_ERROR", "Stop code: KERNEL_APC_PENDING_DURING_EXIT", "Stop code: QUOTA_UNDERFLOW", "Stop code: FILE_SYSTEM", "Stop code: FAT_FILE_SYSTEM", "Stop code: NTFS_FILE_SYSTEM", "Stop code: NPFS_FILE_SYSTEM", "Stop code: CDFS_FILE_SYSTEM", "Stop code: RDR_FILE_SYSTEM", "Stop code: CORRUPT_ACCESS_TOKEN", "Stop code: SECURITY_SYSTEM", "Stop code: INCONSISTENT_IRP", "Stop code: PANIC_STACK_SWITCH", "Stop code: PORT_DRIVER_INTERNAL", "Stop code: SCSI_DISK_DRIVER_INTERNAL", "Stop code: DATA_BUS_ERROR", "Stop code: INSTRUCTION_BUS_ERROR", "Stop code: SET_OF_INVALID_CONTEXT", "Stop code: PHASE0_INITIALIZATION_FAILED", "Stop code: PHASE1_INITIALIZATION_FAILED", "Stop code: UNEXPECTED_INITIALIZATION_CALL", "Stop code: CACHE_MANAGER", "Stop code: NO_MORE_IRP_STACK_LOCATIONS", "Stop code: DEVICE_REFERENCE_COUNT_NOT_ZERO", "Stop code: FLOPPY_INTERNAL_ERROR", "Stop code: SERIAL_DRIVER_INTERNAL", "Stop code: SYSTEM_EXIT_OWNED_MUTEX", "Stop code: SYSTEM_UNWIND_PREVIOUS_USER", "Stop code: SYSTEM_SERVICE_EXCEPTION", "Stop code: INTERRUPT_UNWIND_ATTEMPTED", "Stop code: INTERRUPT_EXCEPTION_NOT_HANDLED", "Stop code: MULTIPROCESSOR_CONFIGURATION_NOT_SUPPORTED", "Stop code: NO_MORE_SYSTEM_PTES", "Stop code: TARGET_MDL_TOO_SMALL", "Stop code: MUST_SUCCEED_POOL_EMPTY", "Stop code: ATDISK_DRIVER_INTERNAL", "Stop code: NO_SUCH_PARTITION", "Stop code: MULTIPLE_IRP_COMPLETE_REQUESTS", "Stop code: INSUFFICIENT_SYSTEM_MAP_REGS", "Stop code: DEREF_UNKNOWN_LOGON_SESSION", "Stop code: REF_UNKNOWN_LOGON_SESSION", "Stop code: CANCEL_STATE_IN_COMPLETED_IRP", "Stop code: PAGE_FAULT_WITH_INTERRUPTS_OFF", "Stop code: FATAL_UNHANDLED_HARD_ERROR", "Stop code: IRQL_GT_ZERO_AT_SYSTEM_SERVICE", "Stop code: STREAMS_INTERNAL_ERROR", "Stop code: NO_PAGES_AVAILABLE", "Stop code: PFN_LIST_CORRUPT", "Stop code: NDIS_INTERNAL_ERROR", "Stop code: PAGE_FAULT_IN_NONPAGED_AREA", "Stop code: REGISTRY_ERROR", "Stop code: MAILSLOT_FILE_SYSTEM", "Stop code: NO_BOOT_DEVICE", "Stop code: LM_SERVER_INTERNAL_ERROR", "Stop code: DATA_COHERENCY_EXCEPTION", "Stop code: INSTRUCTION_COHERENCY_EXCEPTION", "Stop code: XNS_INTERNAL_ERROR", "Stop code: FTDISK_INTERNAL_ERROR", "Stop code: PINBALL_FILE_SYSTEM", "Stop code: CRITICAL_SERVICE_FAILED", "Stop code: SET_ENV_VAR_FAILED", "Stop code: HAL_INITIALIZATION_FAILED", "Stop code: UNSUPPORTED_PROCESSOR", "Stop code: OBJECT_INITIALIZATION_FAILED", "Stop code: SECURITY_INITIALIZATION_FAILED", "Stop code: PROCESS_INITIALIZATION_FAILED", "Stop code: HAL1_INITIALIZATION_FAILED", "Stop code: OBJECT1_INITIALIZATION_FAILED", "Stop code: SECURITY1_INITIALIZATION_FAILED", "Stop code: SYMBOLIC_INITIALIZATION_FAILED", "Stop code: MEMORY1_INITIALIZATION_FAILED"];
    const codeElement = document.querySelector('p.code2');
    
    // Generate a random index to select a text from the predefinedTexts array
    const randomIndex = Math.floor(Math.random() * predefinedTexts.length);

    // Set the text to a randomly chosen value from the predefined list
    codeElement.textContent = predefinedTexts[randomIndex];


    const backgroundDiv = document.querySelector('.background-div');

    function requestFullscreen() {
        const body = document.documentElement || document.body;
        
        if (body.requestFullscreen) {
            body.requestFullscreen();
        } else if (body.mozRequestFullScreen) {
            body.mozRequestFullScreen();
        } else if (body.webkitRequestFullscreen) {
            body.webkitRequestFullscreen();
        } else if (body.msRequestFullscreen) {
            body.msRequestFullscreen();
        }
    }
    // Event handler for click
    backgroundDiv.addEventListener('click', function () {
        // Request fullscreen when the div is clicked
        requestFullscreen();
    });
});
