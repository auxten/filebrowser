package storage

import (
	"github.com/filebrowser/filebrowser/auth"
	"github.com/filebrowser/filebrowser/settings"
	"github.com/filebrowser/filebrowser/users"
)

// Storage is a storage powered by a Backend which makes the necessary
// verifications when fetching and saving data to ensure consistency.
type Storage struct {
	Users    *users.Storage
	Auth     *auth.Storage
	Settings *settings.Storage
}
