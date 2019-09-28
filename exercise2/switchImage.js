pictures = [
						"https://scx1.b-cdn.net/csz/news/800/2018/2-dog.jpg",
						"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2016/05/14093237/samoyed-mother-dog-with-puppy-outdoors.jpg",
						"https://s.yimg.com/ny/api/res/1.2/I6DC0oS0lnamdtoeVbDTfQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk2MA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/61625a1d9420e98f87c193e8b2ad918d",
						"https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg",
						"https://upload.wikimedia.org/wikipedia/commons/a/a8/02.Owczarek_niemiecki_u%C5%BCytkowy_kr%C3%B3tkow%C5%82osy_suka.jpg"
					];
counter = 0;
function nextImage()
{
	var value1 = document.getElementById("image");
	counter = counter + 1;
	if(counter > 4){
		counter = 0;
	}
	value1.src = pictures[counter];
}
function prevImage()
{
	var value1 = document.getElementById("image");
	counter = counter - 1;
	if(counter < 0){
		counter = 4;
	}
	value1.src = pictures[counter];
}
