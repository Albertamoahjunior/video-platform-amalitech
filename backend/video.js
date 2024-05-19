class Video{
    constructor(videoid, title, description, uploaddate, videolink){
        this.videoid = videoid;
        this.title = title;
        this.description = description;
        this.uploaddate = uploaddate;
        this.videolink = videolink;
    }

    constructor(videoid){
        this.videoid = videoid;
    }

    constructor(title){
        this.title = title;
    }

    //get the details for a particular video
    get_video_details(){
        return {
            'video_id' : this.videoid,
            'title' : this.title,
            'desc' : this.description,
            'upload_time' : this.uploaddate,
            'video_link' : this.videolink
        }
    }

    get_videoid(){
        return this.videoid;
    }

    get_video_title(){
        return this.title;
    }

    //stream video from server
    stream_video(){

    }

    //upload video
    upload_video(){

    }

    //remove video
    remove_video(){

    }

    //share video
    share_video(){

    }

    //find video
    find_video(){

    }
}

export default Video;