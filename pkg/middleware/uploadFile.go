package middleware

import (
	"context"
	"fmt"
	dto "mytask/dto/result"
	"net/http"
	"os"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/cloudinary/cloudinary-go/v2/api/uploader"

	"github.com/labstack/echo/v4"
)

func UploadFile(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		file, err := c.FormFile("image")
		if err != nil {
			return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: "Failed to get image"})
		}

		// Buka file
		src, err := file.Open()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "Failed to open image"})
		}

		// Baca file ke dalam buffer
		// fileBytes, err := io.ReadAll(src)
		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: "Failed to read image"})
		}
		// buffer := bytes.NewBuffer(fileBytes)

		// Tentukan ekstensi file berdasarkan Content-Type

		// update := strings.Split(file.Filename, ".")[0]
		// Unggah ke Cloudinary
		var ctx = context.Background()
		var CLOUD_NAME = os.Getenv("CLOUD_NAME")
		var API_KEY = os.Getenv("API_KEY")
		var API_SECRET = os.Getenv("API_SECRET")

		cld, _ := cloudinary.NewFromParams(CLOUD_NAME, API_KEY, API_SECRET)
		resp, err := cld.Upload.Upload(ctx, src, uploader.UploadParams{Folder: "DeweTour"})
		fmt.Println(resp.SecureURL, cld, CLOUD_NAME, API_KEY, API_SECRET)

		if err != nil {
			return c.JSON(http.StatusInternalServerError, dto.ErrorResult{
				Code:    http.StatusInternalServerError,
				Message: "File upload failed: " + err.Error(),
			})
		}

		// Simpan URL hasil upload ke dalam context
		c.Set("dataFile", resp.SecureURL)

		// Lanjutkan ke handler berikutnya
		return next(c)
	}
}
