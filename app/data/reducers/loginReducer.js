export default function(state={fetching:false,data : {}},action){
	switch(action.type){
		case 'LOGIN_START' : {
			return {...state,fetching:true};
		}
		case 'LOGIN_SUCCESS' : {
			return {...state,fetching:false};
		}
		case 'LOGIN_FAILURE' : {
			return {...state,fetching:false};
		}
		case 'LOGIN_ERROR' : {
			return {...state,fetching:false};
		}
		default : return state;
	}
}
