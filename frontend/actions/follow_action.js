import * as APIFollow from '../utils/follow_api_util'


export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";



export const CreateFollow = (FolloweeId) => dispatch =>(
    APIFollow.CreateFollow(FolloweeId)
        .then((follow) => dispatch(ReceiveFollow(follow)))
)


export const DeleteFollow = (UserId,FollowId) => dispatch =>(
    APIFollow.DeleteFollow(UserId,FollowId)
        .then(() => dispatch(RemoveFollow(null)))
)



const ReceiveFollow = (follow) =>(
    {
        type: RECEIVE_FOLLOW,
        follow
    }
);


const RemoveFollow = () =>(
    {
        type:REMOVE_FOLLOW,
    }
);