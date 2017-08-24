export default function(state={fetching:false,data : []},action){
	switch(action.type){
		case 'HOME_API_CALL_START' : {
			return {...state,fetching:true};
		}
		case 'HOME_API_CALL_SUCCESS' : {
			return {...state,fetching:false,data:action.payload,fullData:action.payload};
		}
		case 'HOME_API_CALL_FAILURE' : {
			return {...state,fetching:false,data:[]};
		}
		case 'HOME_API_CALL_ERROR' : {
			return {...state,fetching:false,data:[]};
		}
		case 'LIST_SEARCH' : {
			return {...state,fetching:false,data:action.payload};
		}
		default : return state;
	}
}
