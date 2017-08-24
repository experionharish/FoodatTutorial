export function actionWithoutPayload(eventType){
	return {
		type : eventType
	}
}

export function actionWithPayload(eventType, data){
  return {
    type : eventType,
    payload : data
  }
}
