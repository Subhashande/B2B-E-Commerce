export const selectStats = (state) => state.admin.stats;
export const selectUsers = (state) => state.admin?.users || [];