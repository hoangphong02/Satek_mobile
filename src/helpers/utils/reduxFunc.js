export const handleUpdateDataList = (listState, itemState, type, sortedBy = 'desc') => {
  let listTmp;
  if (type === 'create') {
    listTmp = { ...listState };
    if (sortedBy === 'asc') {
      if (listTmp.meta.pagination.current_page === listTmp.meta.pagination.total_pages && listTmp.meta.pagination.count !== listTmp.meta.pagination.per_page) {
        listTmp.data = listTmp.data.concat([itemState]);
      }
    } else if (sortedBy === 'desc') {
      if (listTmp.meta.pagination.current_page === 1) {
        if (listTmp.meta.pagination.count === listTmp.meta.pagination.per_page) {
          listTmp.data.pop();
        }
        listTmp.data = [itemState].concat(listTmp.data);
      }
    }
    listTmp.meta.pagination = {
      ...listTmp.meta.pagination,
      count:
        listTmp.meta.pagination.count === listTmp.meta.pagination.per_page
          ? listTmp.meta.pagination.count
          : listTmp.meta.pagination.count + 1,
      total: listTmp.meta.pagination.total + 1,
      total_pages: Math.ceil(
        (listTmp.meta.pagination.total + 1) / listTmp.meta.pagination.per_page,
      ),
    };
  } else if (type === 'update') {
    listTmp = { ...listState };
    if (itemState?.length > 0) {
      listTmp.data = listTmp.data.map((item) => {
        if (itemState.map((item2) => item2.id)?.includes(item.id)) {
          return itemState.find((item2) => item2.id === item.id);
        } else {
          return item;
        }
      });
    } else {
      listTmp.data = listTmp.data.map((item) => item.id === itemState.id ? itemState : item);
    }
  } else if (type === 'delete') {
    listTmp = { ...listState };
    listTmp.data = listTmp.data.filter((item) => item.id !== itemState);
    listTmp.meta.pagination = {
      ...listTmp.meta.pagination,
      count: listTmp.meta.pagination.count - 1,
      total: listTmp.meta.pagination.total - 1,
      total_pages: Math.ceil(
        (listTmp.meta.pagination.total - 1) / listTmp.meta.pagination.per_page,
      ),
    };
  } else {
    listTmp = { ...listState };
  }
  return listTmp;
};
