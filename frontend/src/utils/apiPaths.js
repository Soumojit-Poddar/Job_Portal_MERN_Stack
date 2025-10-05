export const BASE_URL = "https://localhost:8000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", //Signup
        LOGIN: "/api/auth/login", // Authenticate user and return JWT token
        GET_PROFILE: "/api/auth/profile",  //Get logged in user details
        UPDATE_PROFILE: "/api/user/profile", // Update profile details
        DELETE_RESUME: "/api/user/resume",  // Delete resume details
    },

    DASHBOARD: {
        OVERVIEW: `/api/analytics/overview`,
    },

    JOBS: {
        GET_ALL_JOBS: '/api/jobs',
        GET_JOB_BY_ID: (id)=> `/api/jobs/${id}`,
        POST_JOB: "/api/jobs",
        GET_JOBS_EMPLOYER: "/api/jobs/get-jobs-employer",
        GET_JOB_BY_ID: (id)=> `/api/jobs/${id}`,
        UPDATE_JOB: (id)=> `/api/jobs/${id}`,
        TOGGLT_CLOSE: (id)=> `/api/jobs/${id}/toggle-close`,
        DELETE_JOB: (id)=> `/api/jobs/${id}`,
        DELETE_JOB: (id)=> `/api/jobs/${id}`,
        
        SAVE_JOB: (id)=> `/api/save-jobs/${id}`,
        UNSAVE_JOB: (id)=> `/api/save-jobs/${id}`,
        GET_SAVED_JOBS: '/api/save-jobs/my',
    },
    
    APPLICATINS: {
        APPLI_TO_JOB: (id)=> `/api/applications/${id}`,
        GET_ALL_APpLICATIONS: (id)=> `/api/applications/job/${id}`,
        UPDATE_STATUS: (id)=> `/api/applications/${id}/status`,
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/image-upload",  // Upload profile picture
    },
};