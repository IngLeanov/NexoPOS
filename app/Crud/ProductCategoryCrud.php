<?php
namespace App\Crud;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Services\CrudService;
use App\Services\Users;
use App\Models\User;
use TorMorten\Eventy\Facades\Events as Hook;
use Exception;
use App\Models\ProductCategory;

class ProductCategoryCrud extends CrudService
{
    /**
     * define the base table
     */
    protected $table      =   'nexopos_products_categories';

    /**
     * base route name
     */
    protected $mainRoute      =   'ns.products-categories';

    /**
     * Define namespace
     * @param  string
     */
    protected $namespace  =   'ns.products-categories';

    /**
     * Model Used
     */
    protected $model      =   ProductCategory::class;

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'nexopos_users', 'nexopos_products_categories.author', '=', 'nexopos_users.id' ],
                    ];

    /**
     * Define where statement
     * @var  array
    **/
    protected $listWhere    =   [];

    /**
     * Define where in statement
     * @var  array
     */
    protected $whereIn      =   [];

    /**
     * Fields which will be filled during post/put
     */
        public $fillable    =   [];

    /**
     * Define Constructor
     * @param  
     */
    public function __construct()
    {
        parent::__construct();

        Hook::addFilter( $this->namespace . '-crud-actions', [ $this, 'setActions' ], 10, 2 );
    }

    /**
     * Return the label used for the crud 
     * instance
     * @return  array
    **/
    public function getLabels()
    {
        return [
            'list_title'            =>  __( 'Category Products List' ),
            'list_description'      =>  __( 'Display all category products.' ),
            'no_entry'              =>  __( 'No category products has been registered' ),
            'create_new'            =>  __( 'Add a new category product' ),
            'create_title'          =>  __( 'Create a new category product' ),
            'create_description'    =>  __( 'Register a new category product and save it.' ),
            'edit_title'            =>  __( 'Edit category product' ),
            'edit_description'      =>  __( 'Modify  Category Product.' ),
            'back_to_list'          =>  __( 'Return to Category Products' ),
        ];
    }

    /**
     * Check whether a feature is enabled
     * @return  boolean
    **/
    public function isEnabled( $feature )
    {
        return false; // by default
    }

    /**
     * Fields
     * @param  object/null
     * @return  array of field
     */
    public function getForm( $entry = null ) 
    {
        return [
            'main' =>  [
                'label'         =>  __( 'Name' ),
                // 'name'          =>  'name',
                // 'value'         =>  $entry->name ?? '',
                'description'   =>  __( 'Provide a name to the resource.' )
            ],
            'tabs'  =>  [
                'general'   =>  [
                    'label'     =>  __( 'General' ),
                    'fields'    =>  [
                        [
                            'type'  =>  'text',
                            'name'  =>  'author',
                            'label' =>  __( 'Author' ),
                            'value' =>  $entry->author ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'created_at',
                            'label' =>  __( 'Created_at' ),
                            'value' =>  $entry->created_at ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'description',
                            'label' =>  __( 'Description' ),
                            'value' =>  $entry->description ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'id',
                            'label' =>  __( 'Id' ),
                            'value' =>  $entry->id ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'media_id',
                            'label' =>  __( 'Media_id' ),
                            'value' =>  $entry->media_id ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'name',
                            'label' =>  __( 'Name' ),
                            'value' =>  $entry->name ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'parent_id',
                            'label' =>  __( 'Parent_id' ),
                            'value' =>  $entry->parent_id ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'total_items',
                            'label' =>  __( 'Total_items' ),
                            'value' =>  $entry->total_items ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'updated_at',
                            'label' =>  __( 'Updated_at' ),
                            'value' =>  $entry->updated_at ?? '',
                        ], [
                            'type'  =>  'text',
                            'name'  =>  'uuid',
                            'label' =>  __( 'Uuid' ),
                            'value' =>  $entry->uuid ?? '',
                        ],                     ]
                ]
            ]
        ];
    }

    /**
     * Filter POST input fields
     * @param  array of fields
     * @return  array of fields
     */
    public function filterPostInputs( $inputs )
    {
        return $inputs;
    }

    /**
     * Filter PUT input fields
     * @param  array of fields
     * @return  array of fields
     */
    public function filterPutInputs( $inputs, ProductCategory $entry )
    {
        return $inputs;
    }

    /**
     * Before saving a record
     * @param  Request $request
     * @return  void
     */
    public function beforePost( $request )
    {
        return $request;
    }

    /**
     * After saving a record
     * @param  Request $request
     * @param  ProductCategory $entry
     * @return  void
     */
    public function afterPost( $request, ProductCategory $entry )
    {
        return $request;
    }

    
    /**
     * get
     * @param  string
     * @return  mixed
     */
    public function get( $param )
    {
        switch( $param ) {
            case 'model' : return $this->model ; break;
        }
    }

    /**
     * Before updating a record
     * @param  Request $request
     * @param  object entry
     * @return  void
     */
    public function beforePut( $request, $entry )
    {
        return $request;
    }

    /**
     * After updating a record
     * @param  Request $request
     * @param  object entry
     * @return  void
     */
    public function afterPut( $request, $entry )
    {
        return $request;
    }
    
    /**
     * Protect an access to a specific crud UI
     * @param  array { namespace, id, type }
     * @return  array | throw Exception
    **/
    public function canAccess( $fields )
    {
        $users      =   app()->make( Users::class );
        
        if ( $users->is([ 'admin' ]) ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'The access is granted.' )
            ];
        }

        throw new Exception( __( 'You don\'t have access to that ressource' ) );
    }

    /**
     * Before Delete
     * @return  void
     */
    public function beforeDelete( $namespace, $id, $model ) {
        if ( $namespace == 'ns.products-categories' ) {
            /**
             *  Perform an action before deleting an entry
             *  In case something wrong, this response can be returned
             *
             *  return response([
             *      'status'    =>  'danger',
             *      'message'   =>  __( 'You\re not allowed to do that.' )
             *  ], 403 );
            **/
        }
    }

    /**
     * Define Columns
     * @return  array of columns configuration
     */
    public function getColumns() {
        return [
            'author'  =>  [
                'label'  =>  __( 'Author' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'created_at'  =>  [
                'label'  =>  __( 'Created_at' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'description'  =>  [
                'label'  =>  __( 'Description' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'id'  =>  [
                'label'  =>  __( 'Id' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'media_id'  =>  [
                'label'  =>  __( 'Media_id' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'name'  =>  [
                'label'  =>  __( 'Name' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'parent_id'  =>  [
                'label'  =>  __( 'Parent_id' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'total_items'  =>  [
                'label'  =>  __( 'Total_items' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'updated_at'  =>  [
                'label'  =>  __( 'Updated_at' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
            'uuid'  =>  [
                'label'  =>  __( 'Uuid' ),
                '$direction'    =>  '',
                '$sort'         =>  false
            ],
                    ];
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        // Don't overwrite
        $entry->{ '$checked' }  =   false;
        $entry->{ '$toggled' }  =   false;
        $entry->{ '$id' }       =   $entry->id;

        // you can make changes here
        $entry->{'$actions'}    =   [
            [
                'label'         =>      __( 'Edit' ),
                'namespace'     =>      'edit',
                'type'          =>      'GOTO',
                'index'         =>      'id',
                'url'           =>      url( '/dashboard/' . '' . '/edit/' . $entry->id )
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'url'       =>  url( '/api/nexopos/v4/crud/ns.products-categories/' . $entry->id ),
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this ?' ),
                ]
            ]
        ];

        return $entry;
    }

    
    /**
     * Bulk Delete Action
     * @param    object Request with object
     * @return    false/array
     */
    public function bulkAction( Request $request ) 
    {
        /**
         * Deleting licence is only allowed for admin
         * and supervisor.
         */
        $user   =   app()->make( Users::class );
        if ( ! $user->is([ 'admin', 'supervisor' ]) ) {
            return response()->json([
                'status'    =>  'failed',
                'message'   =>  __( 'You\'re not allowed to do this operation' )
            ], 403 );
        }

        if ( $request->input( 'action' ) == 'delete_selected' ) {
            $status     =   [
                'success'   =>  0,
                'failed'    =>  0
            ];

            foreach ( $request->input( 'entries' ) as $id ) {
                $entity     =   $this->model::find( $id );
                if ( $entity instanceof ProductCategory ) {
                    $entity->delete();
                    $status[ 'success' ]++;
                } else {
                    $status[ 'failed' ]++;
                }
            }
            return $status;
        }

        return Hook::filter( $this->namespace . '-catch-action', false, $request );
    }

    /**
     * get Links
     * @return  array of links
     */
    public function getLinks()
    {
        return  [
            'list'      =>  'ns.products-categories',
            'create'    =>  'ns.products-categories/create',
            'edit'      =>  'ns.products-categories/edit/#'
        ];
    }

    /**
     * Get Bulk actions
     * @return  array of actions
    **/
    public function getBulkActions()
    {
        return Hook::filter( $this->namespace . '-bulk', [
            [
                'label'         =>  __( 'Delete Selected Groups' ),
                'identifier'    =>  'delete_selected',
                'url'           =>  route( 'crud.bulk-actions', [
                    'namespace' =>  $this->namespace
                ])
            ]
        ]);
    }

    /**
     * get exports
     * @return  array of export formats
    **/
    public function getExports()
    {
        return [];
    }
}