import { LISTEN_TO_CURRENT_USER_PROFILE } from "./profileConstants";

// redux
export function listentToCurrentUserProfile(profile) {
    return {
        type: LISTEN_TO_CURRENT_USER_PROFILE,
        payload: profile
    }
}