angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees, $location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.totalPages = 1;
  homePageVm.currentPage = 1;
  homePageVm.loading = false;
  homePageVm.searchText = '';

  homePageVm.updateSearch = (value) => {
    if (value) {
      homePageVm.searchText = value;
      $location.search('filter', value);
    } else {
      homePageVm.searchText = '';
      $location.url($location.path());
    }
  };

  homePageVm.loadMoreEmplyees = () => {
    homePageVm.loading = true;
    Employees.loadMoreEmployees()
      .then((res) => {
        homePageVm.employees = homePageVm.employees.concat(res.data.employees);
        homePageVm.loading = false;
        homePageVm.currentPage = res.data.current_page;
        homePageVm.totalPages = res.data.pages;
      });
  };

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.searchText = $location.$$search.filter;
      });
  }
}
