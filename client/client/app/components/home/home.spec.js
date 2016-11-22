import HomeModule from './home'


describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  // describe('View', () => {
  //   // view layer specs.
  //   let scope, template;

  //   beforeEach(() => {
  //     scope = $rootScope.$new();
  //     template = $compile('<home></home>')(scope);
  //     scope.$apply();
  //   });

  //   it('has name in template', () => {
  //     expect(template.find('h2').html()).to.eq('What are we doing?');
  //   });

  // });
});
