
    import ICacheObject = angular.ICacheObject;
    import IResourceClass = angular.resource.IResourceClass;
    import IResourceService = angular.resource.IResourceService;
    import IResourceMethod = angular.resource.IResourceMethod;
    import IResourceArray = angular.resource.IResourceArray;
    import IResource = angular.resource.IResource;
    import IResourceArrayMethod = angular.resource.IResourceArrayMethod;

    export interface IUserVO {
        id:number;
        firstname:string;
        lastname:string;
        birthday:string;
        street:string;
        street_no:number;
        zip:number;
        city:string;
    }

    export interface IUsersProvider extends angular.IServiceProvider {
        setEndpoint (endpoint:string):void;
    }

    export interface IUsersService {
        query(): IResourceArray<IUserVO>;
        getUsers():IResourceArray<IUserVO>;
        getUser( params: {user_id:number} ):IResource<IUserVO>;
        createUser( user:IUserVO, success?: Function, error?: Function ):IResource<IUserVO>;
    }

    export class UsersServiceProvider implements IUsersProvider {

        private endpoint:string = 'mock/data.json';

        public setEndpoint(endpoint:string):void {
            this.endpoint = endpoint;
        }

        /** @ngInject */
        $get($resource:IResourceService): any {
            return $resource (
                this.endpoint + "/:user_id",
                {
                    user_id:'@id'
                },
                {
                    'getUser':      {method:'GET'},
                    'createUser':   {method:'POST'},
                    'getUsers':     {method:'GET', isArray:true},
                    'deleteUser':   {method:'DELETE'},
                    'updateUser':   {method:'PUT', responseType: 'text' }
                }

            );
        }
    }
