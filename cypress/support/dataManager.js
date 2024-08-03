export const getUserByKeyword = (usersArray, keyword) => {
    var userData = usersArray.filter(function (item) {
        return item.username.includes(keyword);
    });
    return userData[0];
};