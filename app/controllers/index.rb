get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/todos/get.json' do
  task = {}
  Task.all.each do |t|
    task[t.id] = [t.name, t.due_date, t.priority]
  end
  task.to_json
end