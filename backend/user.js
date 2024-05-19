import Video from './video'
import {login, register} from './auth'

class User{
    constructor(userid, username, email, password){
        this.userid = userid;
        this.email = email;
        this.username = username;
        this.password = password; 
    }

    user_login(){
        //user should be able to login
        const log = login();
    }

    user_register(){
        //user should be able to sign up or register on the platform
        const sign = register();
    }
}


class Admin extends User{
    //this class can upload videos
    upload_video(){
        let video_to_upload = new Video();
        video_to_upload.upload_video();
    }

    //update video files(delete, or add latest)
    delete_video(){
         let video_to_delete= new Video();
         video_to_delete.remove_video();
    }

    update_video(){
        //pass in the arguments needed to update
    }

    //find video
    find_video(){
        let found = new Video();
        found.find_video();
    }
}

class Client extends User{
    //this class can watch videos, skip back and forward and pause.
    //using timestamps or by following chunk sizes, videos can skipped or rolled backwards.
    stream_video(){
        let streaming_video = new Video();
        streaming_video.stream_video();
    }

    skip_video(){
        let streaming_video_skip = new Video();
        streaming_video_skip.stream_video()
        
    }
}

exports = {
    Admin,
    Client
}