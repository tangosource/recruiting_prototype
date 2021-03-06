recruiting.controller('recruiteesController', ['$scope', function ($scope) {
  $scope.recruitees = [
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 90, avatar: '/profile_pic.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 70, avatar: '/profile_pic2.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 50, avatar: '/profile_pic3.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 90, avatar: '/profile_pic.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 70, avatar: '/profile_pic2.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 50, avatar: '/profile_pic3.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 90, avatar: '/profile_pic.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 70, avatar: '/profile_pic2.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 50, avatar: '/profile_pic3.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 90, avatar: '/profile_pic.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 70, avatar: '/profile_pic2.jpg'},
    {full_name: 'Juan Sebastian', position: 'Ruby developer', expertise: 'Angular.js', experience: 5, global_score: 50, avatar: '/profile_pic3.jpg'}
  ];

  $scope.scoreType = function(score){
    if(score >= 80){ return 'score-color--pass'; }
    if(score >= 60 && score < 80){ return 'score-color--meh'; }
    if(score < 60){ return 'score-color--fail'; }
  };
}]);
