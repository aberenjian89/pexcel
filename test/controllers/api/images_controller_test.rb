require 'test_helper'

class Api::ImagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_images_index_url
    assert_response :success
  end

  test "should get create" do
    get api_images_create_url
    assert_response :success
  end

  test "should get update" do
    get api_images_update_url
    assert_response :success
  end

  test "should get edit" do
    get api_images_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get api_images_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_images_show_url
    assert_response :success
  end

end
