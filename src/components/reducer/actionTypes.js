export const actions = {
    GET_DEALERS:"GET_DEALERS",
    GET_ITEMS:"GET_ITEMS",
  };

export const actionGetItems=(data)=>{
    return {type:actions.GET_ITEMS,payload:data}
}

export const actionGetDealers=(data)=>{
    return {type:actions.GET_DEALERS,payload:data}
}
