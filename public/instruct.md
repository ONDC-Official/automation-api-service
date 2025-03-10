```
{
  // Transaction Cache
  "5fe69510-1aa2-4c94-b3ef-6e512291afaf": {
    "role": "BAP",
    "domain": "ONDC:TRV11",
    "version": "2.0.1",
    "city": "std:080",
    "country": "IND",
    "latest_action": "search",
    "latest_timestamp": "2025-01-09T10:25:29.677Z",
    "message_ids": [""],
    "api_list": [
      {
        "action": "search",
        "sync_response": "ACK/NACK",
        "message_id": "53e110d1-91e3-480d-8ccc-d9e3d63f1a0b",
        "error": "",
        "ingress_timestamp": "2025-01-09T10:43:32.749Z"
      }
    ]
  }
}
```

```
{
  // NP Cache
  "<subsciber_id>": {
    "active_session_ids": [
      "17e2aa52-0edc-410d-a170-724c01e4370f",
      "e2c055e9-0fbb-4831-956b-4b9a8df729d9"
    ],
    "profile": {
        "bypass_header" : false,
        "bypass_nack": false,
        "bypass_L1": false,
        "bypass_gateway": false,
        "bypass_ttl": false
    },
    "expectations": [
        {
            "action": "search",
            "session_id": "17e2aa52-0edc-410d-a170-724c01e4370f",
            "flow_id": "17e2aa52-0edc-410d-a170-724c01e4370f"
        }
    ]
  }
}
```

```
{
  // Session Cache
  "5bcab0ef-60e0-47fa-8bbe-2e57c164c561": {
    "transaction_ids": [
      "a1371723-9b8b-4a47-84f2-8527e96c314e",
      "b2710dbf-ac93-4247-8a74-d03ef780b338"
    ],
    "flow_map": {
        "<flow_id>": "txn_id"
    },
    "role": "BAP",
    "domain": "ONDC:TRV11",
    "version": "2.0.1",
    "transaction_mode": "UNIT/FLOW",
    "profile": {//optional
        "bypass_header" : false,
        "bypass_nack": false,
        "bypass_L0_L1": false,
        "bypass_gateway": false,
        "bypass_ttl": false
    },
    "subscriber_id": "test.com"
  }
}
```
