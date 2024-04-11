function(instance, context) {

    // GET JSON 
    const cmdKJSON = [
      {
        "name": "View",
        "icon": "",
        "handler": "bubble_fn_cmd_view",
        "parameters": false,
        "param_type": "",
        "keybinds": "↵",
        "keywords": "open see click go",
        "requirements": "candidate",
        "parent_id": null,
        "id": 1
      },
      {
        "name": "Move to stage...",
        "icon": "",
        "handler": "bubble_fn_cmd_stage",
        "parameters": true,
        "param_type": "stage",
        "keybinds": "M",
        "keywords": "update status advance progress escalate",
        "requirements": "",
        "parent_id": null,
        "id": 3
      },
      {
        "name": "Change rating...",
        "icon": "",
        "handler": "bubble_fn_cmd_rating",
        "parameters": true,
        "param_type": "rating",
        "keybinds": "R",
        "keywords": "rate score rank grade",
        "requirements": "",
        "parent_id": null,
        "id": 4
      },
      {
        "name": "Change labels...",
        "icon": "",
        "handler": "bubble_fn_cmd_label",
        "parameters": true,
        "param_type": "tag",
        "keybinds": "L",
        "keywords": "category tag note leave write add",
        "requirements": "",
        "parent_id": null,
        "id": 5
      },
      {
        "name": "Clear labels",
        "icon": "",
        "handler": "bubble_fn_cmd_label_clear",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "clear remove labels tags",
        "requirements": "",
        "parent_id": null,
        "id": 6
      },
      {
        "name": "Mark read",
        "icon": "",
        "handler": "bubble_fn_cmd_markRead",
        "parameters": false,
        "param_type": "",
        "keybinds": "E",
        "keywords": "seen unseen new old done viewed view",
        "requirements": "",
        "parent_id": null,
        "id": 7
      },
      {
        "name": "Mark unread",
        "icon": "",
        "handler": "bubble_fn_cmd_markUnread",
        "parameters": false,
        "param_type": "",
        "keybinds": "⇧,E",
        "keywords": "seen unseen new old done viewed view",
        "requirements": "",
        "parent_id": null,
        "id": 8
      },
      {
        "name": "Favorite candidate",
        "icon": "",
        "handler": "bubble_fn_cmd_favorite",
        "parameters": false,
        "param_type": "",
        "keybinds": "F",
        "keywords": "star heart bookmark shortlist",
        "requirements": "",
        "parent_id": null,
        "id": 9
      },
      {
        "name": "Unfavorite candidate",
        "icon": "",
        "handler": "bubble_fn_cmd_unfavorite",
        "parameters": false,
        "param_type": "",
        "keybinds": "⇧,F",
        "keywords": "star heart bookmark shortlist",
        "requirements": "",
        "parent_id": null,
        "id": 10
      },
      {
        "name": "Edit role",
        "icon": "",
        "handler": "bubble_fn_nav_roleSettings",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "edit settings role application form update stages stage set create format modify preferences job post",
        "requirements": "",
        "parent_id": null,
        "id": 14
      },
      {
        "name": "Go to stage...",
        "icon": "",
        "handler": "bubble_fn_nav_stage",
        "parameters": true,
        "param_type": "stage",
        "keybinds": "",
        "keywords": "status jump stages see view process place ",
        "requirements": "",
        "parent_id": null,
        "id": 26
      },
      {
        "name": "Go to settings",
        "icon": "",
        "handler": "bubble_fn_nav_settings",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "preferences system setup account",
        "requirements": "",
        "parent_id": null,
        "id": 29
      },
      {
        "name": "Open role...",
        "icon": "",
        "handler": "bubble_fn_nav_role",
        "parameters": true,
        "param_type": "role",
        "keybinds": "",
        "keywords": "role open go to jump quick job post navigate menu",
        "requirements": "",
        "parent_id": null,
        "id": 30
      },
      {
        "name": "Settings -> Account",
        "icon": "",
        "handler": "bubble_fn_nav_settings_account",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "preferences system setup account profile",
        "requirements": "",
        "parent_id": null,
        "id": 31
      },
      {
        "name": "Settings -> Team Members",
        "icon": "",
        "handler": "bubble_fn_nav_settings_team",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "team users departments invite access permissions user company preferences system setup account",
        "requirements": "",
        "parent_id": null,
        "id": 32
      },
      {
        "name": "Settings -> Labels",
        "icon": "",
        "handler": "bubble_fn_nav_settings_labels",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "labels manage set categories tags label category custom customize workflow setup",
        "requirements": "",
        "parent_id": null,
        "id": 33
      },
      {
        "name": "Settings -> Ratings",
        "icon": "",
        "handler": "bubble_fn_nav_settings_ratings",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "ratings score card rate sort filter rank rankings scoring",
        "requirements": "",
        "parent_id": null,
        "id": 34
      },
      {
        "name": "Settings -> Notifications",
        "icon": "",
        "handler": "bubble_fn_nav_settings_notifications",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "notifications settings notify alert alerts email emails update updates note",
        "requirements": "",
        "parent_id": null,
        "id": 35
      },
      {
        "name": "Settings -> Subscription",
        "icon": "",
        "handler": "bubble_fn_nav_settings_subscription",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "billing account subscription payment plan tier trial term sub credit card bill stripe",
        "requirements": "",
        "parent_id": null,
        "id": 36
      },
      {
        "name": "Keyboard shortcuts",
        "icon": "",
        "handler": "bubble_fn_nav_shortcuts",
        "parameters": false,
        "param_type": "",
        "keybinds": "⇧,?",
        "keywords": "keys keybinds shortcuts commands fn function keyboard press enter guide list ",
        "requirements": "",
        "parent_id": null,
        "id": 38
      },
      {
        "name": "Toggle navigation sidebar",
        "icon": "",
        "handler": "bubble_fn_nav_sidebar",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "",
        "requirements": "",
        "parent_id": null,
        "id": 39
      },
      {
        "name": "Log out",
        "icon": "",
        "handler": "bubble_fn_nav_logout",
        "parameters": false,
        "param_type": "",
        "keybinds": "",
        "keywords": "",
        "requirements": "",
        "parent_id": null,
        "id": 40
      }
    ];
    
    // CONVERT JSON TO BUBBLE LIST
    const cmdKBUBBLE = jsonToBubbleList(cmdKJSON);
    
    // SAVE TO INSTANCE DATA
    instance.data.cmdkItems = cmdKBUBBLE;
    
    // PUBLISH VALUE
    instance.publishState("cmd_k_items", instance.data.cmdkItems);
    
    }