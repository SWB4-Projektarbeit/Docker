@echo off

IF NOT EXIST “.env” (
    COPY ".env.default" ".env"
    ECHO "Created '.env' file."
) ELSE (
    ECHO "'.env' file already exists."
)
