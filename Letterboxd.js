var objc = JSON.parse($response.body);

objc.member.hideAdsInContent = true; // or false, based on your requirement
objc.member.hideAds = true; // or false, based on your requirement
objc.hideAds = true; // or false, based on your requirement
objc.canCloneLists = true;
objc.canChangeAppIcon = true;
objc.canFilterActivity = true;
objc.canHaveCustomPosters = true;
objc.canHaveCustomBackdrops = true;
objc.canSeeStoryLikesComments = true;
objc.canSeePrivateViewings = true;
objc.canAccessFilmClub = true;

$done({ body: JSON.stringify(objc) });
