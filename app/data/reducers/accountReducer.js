export default function(state={arabic : false},action){
	switch(action.type){
		case 'ENABLE_ARABIC' : {
			return {...state,arabic : true};
		}
		case 'DISABLE_ARABIC' : {
			return {...state,arabic : false};
		}
		default : return state;
	}
}
