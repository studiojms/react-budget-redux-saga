export const openEditModal = (id: string) => {
  return { type: 'OPEN_EDIT_MODAL', payload: { id } };
};

export const closeEditModal = () => {
  return { type: 'CLOSE_EDIT_MODAL' };
};
