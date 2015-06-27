class API::ListsController < API::BaseController
  def index
    @lists = List.all
    respond_with :api, @lists
  end

  def new
    @list = List.new price: 0.0
    respond_with :api, @list
  end

  def create
    @list = List.create list_params
    respond_with :api, @list
  end

  def show
    @list = List.find params[:id]
    respond_with :api, @list
  end

  def update
    @list = List.find params[:id]
    @list.update_attributes list_params
    respond_with :api, @list
  end

  def destroy
    @list = List.find params[:id]
    @list.destroy
    respond_with :api, @list
  end

  private

  def list_params
    params.require(:list).permit(:name, :category, :price)
  end
end
