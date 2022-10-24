Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /logs/ | GET | Index.jsx | Log.find() | Log.find()
Show | /logs/:id/ | READ | Show.jsx | Log.findOne or Log.findById | 
New | /logs/new | GET | New.jsx | none | 
Create | /logs/ | POST | none | Log.create(req.body) | 
Edit | /logs/:id/edit | GET | Edit.jsx | Log.findOne or Log.findById | 
Update | /logs/:id | PUT | none | Log.findByIdAndUpdate or Log.findOneAndUpdate | 
Destroy | /logs/:id | DELETE | none | Log.findByIdAndRemove or Log.findByIdAndDelete |