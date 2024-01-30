import React from 'react'

export const Picture_Employee = () => {
  return (
    <>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    .image-input-placeholder {\n        background-image: url('svg/avatars/blank.svg');\n    }\n\n    [data-bs-theme=\"dark\"] .image-input-placeholder {\n        background-image: url('svg/avatars/blank-dark.svg');\n    }\n"
      }}
    />
    {/*begin::Image input*/}
    <div
      className="image-input image-input-outline"
      data-kt-image-input="true"
      style={{ backgroundImage: "url(/assets/media/svg/avatars/blank.svg)" }}
    >
      {/*begin::Image preview wrapper*/}
      <div
        className="image-input-wrapper w-125px h-125px"
        style={{ backgroundImage: "url(/assets/media/avatars/300-1.jpg)" }}
      />
      {/*end::Image preview wrapper*/}
      {/*begin::Edit button*/}
      <label
        className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="change"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Change avatar"
      >
        <i className="ki-duotone ki-pencil fs-6">
          <span className="path1" />
          <span className="path2" />
        </i>
        {/*begin::Inputs*/}
        <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
        <input type="hidden" name="avatar_remove" />
        {/*end::Inputs*/}
      </label>
      {/*end::Edit button*/}
      {/*begin::Cancel button*/}
      <span
        className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="cancel"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Cancel avatar"
      >
        <i className="ki-outline ki-cross fs-3" />
      </span>
      {/*end::Cancel button*/}
      {/*begin::Remove button*/}
      <span
        className="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
        data-kt-image-input-action="remove"
        data-bs-toggle="tooltip"
        data-bs-dismiss="click"
        title="Remove avatar"
      >
        <i className="ki-outline ki-cross fs-3" />
      </span>
      {/*end::Remove button*/}
    </div>
    {/*end::Image input*/}
  </>
  
  )
}
